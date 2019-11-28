var control = document.querySelectorAll(".control")

var sceneDiv = document.querySelector(".scene")
var width = sceneDiv.offsetWidth
var height = sceneDiv.offsetHeight



var scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)
var camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);

let guitarra





let rgbeLoader = new THREE.RGBELoader().setDataType(THREE.UnsignedByteType)
    .load("./src/resources/env/bridge.hdr", function (texture) {

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

            gltf.scene.rotation.z = -90 * rads
            gltf.scene.rotation.y = -90 * rads

            controls.target.set(0, 2.5, 0);
            camera.position.set(0, 2.5, 7)

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





//interaccion con controles

controls = new THREE.OrbitControls(camera, renderer.domElement)






//comandos

//activa y desactiva la rotacion del modelo
let rotacion = false;
control[0].addEventListener("click", function () {
    rotacion = !rotacion

})



//cambia el detalle a observar
let perspectiva = 0

control[1].addEventListener("click", function () {
    perspectiva += 1
    if (perspectiva == 1) {
        controls.target.set(0, 6.5, 0);
        camera.position.set(0, 6.5, 1)
    } else if (perspectiva == 2) {
        controls.target.set(0, -2, 0);
        camera.position.set(0, -2, 0.5)
    } else if (perspectiva == 3) {
        controls.target.set(0, 8, 0);
        camera.position.set(-1, 8, 1.5)
    } else if (perspectiva == 4) {
        controls.target.set(0, -3, 0);
        camera.position.set(0, -3, 1.5)
    } else if (perspectiva == 5) {
        controls.target.set(0, 2.5, 0);
        camera.position.set(0, 2.5, 7)
        perspectiva = 0
    }
})




//actualiza el kdr "Skybox" y cambia el reflejo de la guitarra

let fondo = 0;
let hdr;


control[2].addEventListener("click", function () {


    if (fondo == 0) hdr = "field"
    if (fondo == 1) hdr = "forest"
    if (fondo == 2) hdr = "night"
    if (fondo == 3) hdr = "room"
    if (fondo == 4) hdr = "studio"
    if (fondo == 5) hdr = "theater"
    if (fondo == 6) hdr = "urban"
    if (fondo == 7) {
        hdr = "bridge"
        fondo = 0
    }


    let rgbeLoader = new THREE.RGBELoader().setDataType(THREE.UnsignedByteType)
        .load("./src/resources/env/" + hdr + ".hdr", function (texture) {

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

            guitarra.traverse(function (child) {
                if (child.isMesh) {
                    child.material.envMap = envMap;
                }
            });

            pmremGenerator.dispose();
            pmremCubeUVPacker.dispose();

        })

    fondo += 1;
})





//game logic
var update = function () {
    if (rotacion) guitarra.rotation.y -= 0.01
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