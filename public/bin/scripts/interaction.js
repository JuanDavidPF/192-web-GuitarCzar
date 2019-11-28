var sceneDiv = document.querySelector(".scene")
var width = sceneDiv.offsetWidth
var height = sceneDiv.offsetHeight

var scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

let guitarra


let rgbeLoader = new THREE.RGBELoader().setDataType(THREE.UnsignedByteType)
    .load("./src/resources/env/urban.hdr", function (texture) {

        var options = {
            minFilter: texture.minFilter,
            magFilter: texture.magFilter
        }
        scene.background = new THREE.WebGLRenderTargetCube(1024, 1024, options).fromEquirectangularTexture(renderer, texture);
        var pmremGenerator = new THREE.PMREMGenerator(scene.background.texture);
        pmremGenerator.update(renderer);
        var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker(pmremGenerator.cubeLods);
        pmremCubeUVPacker.update(renderer);
        var envMap = pmremCubeUVPacker.CubeUVRenderTarget.texture;

        // model 
        let loader = new THREE.GLTFLoader();
        loader.load('./src/resources/models/ibanez/scene.gltf', function (gltf) {

            var rads = Math.PI / 180

            guitarra = gltf.scene
            gltf.scene.rotation.x = 0 * rads
            gltf.scene.rotation.z = -90 * rads
            gltf.scene.rotation.y = -30 * rads
            controls.target.set(guitarra.position.x, guitarra.position.y, guitarra.position.z);
            gltf.scene.position.set(0, 3, 0)

            gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    child.material.envMap = envMap;
                }
            });
            scene.add(gltf.scene);
        })
        pmremGenerator.dispose();
        pmremCubeUVPacker.dispose();

    })




//renderer


renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
renderer.gammaOutput = true;

sceneDiv.appendChild(renderer.domElement);



//restaurar el tamaño
window.addEventListener('resize', function () {

    width = sceneDiv.offsetWidth
    height = sceneDiv.offsetHeight
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()

})



//camara
camera.position.z = 5




//interaccion con controles

controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.target.set(0, -0.2, -0.2);






//game logic
var update = function () {
    guitarra.rotation.y -= 0.005

};


//draw scene
var render = function () {
    renderer.render(scene, camera)
}


//run game loop (update, render, repeat)
var GameLoop = function () {
    requestAnimationFrame(GameLoop)
    update()
    render()
    controls.update();
}

GameLoop();