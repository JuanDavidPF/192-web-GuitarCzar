var mainCover = document.querySelector('.mainHeader__cover');
var headerLeft = document.querySelector('.mainHeader__left');

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
var searchGlassToggle = false;
var navTop = document.querySelector('.mainHeader__top');
var navBottom = document.querySelector('.mainHeader__bottom');
var coverText = document.querySelector('.coverInfo__button');
var coverTitle = document.querySelector('.coverInfo__title');
var burguerGlass = document.querySelector('.burguerGlass');
var searchBar = document.querySelector('.mainheader__srchBar');
var ventanaPequena = window.matchMedia("(max-width: 800px)");



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
    console.log(pageYOffset);

    mainCover.style.backgroundPositionX = fondoX + '%';

    switch (counterCover) {
        case 0:
            mainCover.style.backgroundImage = 'url("./data/mainCover0.png")';
            bulletCover0.checked = true;
            coverText.innerHTML = 'B.C. RICH <br> BICH NATURAL';
            coverTitle.innerHTML = "UNLEASH THE BEAST";
            coverTitle.style.fontFamily = "Coda Caption, sans-serif";

            break;

        case 1:
            mainCover.style.backgroundImage = 'url("./data/mainCover1.png")';
            bulletCover1.checked = true;
            coverText.innerHTML = 'PRO SERIES CD24 <br> SNOW WHITE';
            coverTitle.innerHTML = "HEAVY AS METAL<br>CLASSY AS STEEL";
            coverTitle.style.fontFamily = "Philosopher, sans-serif";

            break;

        case 2:
            mainCover.style.backgroundImage = 'url("./data/mainCover2.png")';
            bulletCover2.checked = true;
            coverText.innerHTML = 'JS SERIES <br> SPECTRA BASS<br>JS3QV';
            coverTitle.innerHTML = "GROOVE TO THE BONES";
            coverTitle.style.fontFamily = "Hammersmith One, sans-serif";

            break;

        case 3:
            mainCover.style.backgroundImage = 'url("./data/mainCover3.png")';
            bulletCover3.checked = true;
            coverText.innerHTML = 'PRO SERIES <br> SOLOIST™  <br> SL7PT MAH<br>NORTHERN LIGHTS';
            coverTitle.innerHTML = "PLAY THE COSMOS";
            coverTitle.style.fontFamily = "Julius Sans One, sans-serif";

            break;


        case 4:
            mainCover.style.backgroundImage = 'url("./data/mainCover4.png")';
            bulletCover4.checked = true;
            coverText.innerHTML = 'PRO SEIRES <br> SOLOIST™  SL72A <br> CHARCOAL GRAY';
            coverTitle.innerHTML = "PLAY THE COSMOS";
            coverTitle.innerHTML = "SLIM-ELEGANT-PRECISE";
            coverTitle.style.fontFamily = "Economica, sans-serif";

            break;

    }



    if (ventanaPequena.matches) {

        if (searchGlassToggle) {
            searchBar.style.width = '60%';
            searchBar.style.opacity = '1';
            searchBar.style.transition = 'width .7s';
            burguerGlass.style.marginLeft = '70%';

        } else {
            searchBar.style.width = '0%';
            searchBar.style.opacity = '0';
            searchBar.style.transition = 'width .7s, opacity 0s .7s';
            burguerGlass.style.marginLeft = '0px';

        }

        if (hamburguerToggle) {
            navTop.style.top = '75px';
            navBottom.style.top = '110px';
        } else if (hamburguerToggle == false) {
            navTop.style.top = '-125px';
            navBottom.style.top = '-180px';
        }


    } else {
        searchBar.style.transition = 'width 0s, opacity 0s 0s';
        searchBar.style.width = '100%';
        searchBar.style.opacity = '1';
        if (hamburguerToggle) btnBurguer.classList.toggle("change");
        hamburguerToggle = false;
        searchGlassToggle = false;

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
    searchGlassToggle = false;

});

//opening the search bar from hamburguer meno

burguerGlass.addEventListener("click", function () {
    searchGlassToggle = !searchGlassToggle;

});