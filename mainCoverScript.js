var mainCover = document.querySelector('.mainHeader__cover');
var bulletCover0 = document.querySelector('#firstBullet');
var bulletCover1 = document.querySelector('#secondBullet');
var bulletCover2 = document.querySelector('#thirdBullet');
var bulletCover3 = document.querySelector('#fourthBullet');
var bulletCover4 = document.querySelector('#fifthBullet');
var fondoX = 10;
var draw = setInterval(draw, 17);
var counterSlider = setInterval(hiloCoverSlideShow, 10000);
var counterCover = 0;
var btnBurguer = document.querySelector('.hamburgerButton');
var hamburguerToggle = false;
var navTop = document.querySelector('.mainHeader__top');
var navBottom = document.querySelector('.mainHeader__bottom');

function hiloCoverSlideShow() {
    counterCover++;
    if (counterCover == 5) counterCover = 0;


    if (fondoX == 10) {
        fondoX = 55;

    } else if (fondoX == 55) {
        fondoX = 10;
    }
}




function draw() {
    console.log(fondoX);
    mainCover.style.backgroundPositionX = fondoX + '%';

    switch (counterCover) {
        case 0:
            mainCover.style.backgroundImage = 'url("./data/mainCover0.png")';
            bulletCover0.checked = true;

            break;

        case 1:
            mainCover.style.backgroundImage = 'url("./data/mainCover1.png")';
            bulletCover1.checked = true;
            break;

        case 2:
            mainCover.style.backgroundImage = 'url("./data/mainCover2.png")';
            bulletCover2.checked = true;

            break;

        case 3:
            mainCover.style.backgroundImage = 'url("./data/mainCover3.png")';
            bulletCover3.checked = true;

            break;

        case 4:
            mainCover.style.backgroundImage = 'url("./data/mainCover4.png")';
            bulletCover4.checked = true;

            break;

    }

    if (hamburguerToggle) {
        navTop.style.top = '75px';
        navBottom.style.top = '110px';

    } else {
        navTop.style.top = '-125px';
        navBottom.style.top = '-180px';

    }

}




//passing cover images with the cover bullets

bulletCover0.addEventListener("click", function () {
    counterCover = 0;
    clearInterval(counterSlider);
    counterSlider = setInterval(hiloCoverSlideShow, 7000);
    fondoX = 5;

});

bulletCover1.addEventListener("click", function () {
    counterCover = 1;
    clearInterval(counterSlider);
    counterSlider = setInterval(hiloCoverSlideShow, 7000);
    fondoX = 55;

});

bulletCover2.addEventListener("click", function () {
    counterCover = 2;
    clearInterval(counterSlider);
    counterSlider = setInterval(hiloCoverSlideShow, 7000);
    fondoX = 5;

});

bulletCover3.addEventListener("click", function () {
    counterCover = 3;
    clearInterval(counterSlider);
    counterSlider = setInterval(hiloCoverSlideShow, 7000);
    fondoX = 55;

});
bulletCover4.addEventListener("click", function () {
    counterCover = 4;
    clearInterval(counterSlider);
    counterSlider = setInterval(hiloCoverSlideShow, 7000);
    fondoX = 5;

});

//opening the hamburguer menu
btnBurguer.addEventListener("click", function () {
    btnBurguer.classList.toggle("change");
    hamburguerToggle = !hamburguerToggle;
    console.log(hamburguerToggle);

   
});