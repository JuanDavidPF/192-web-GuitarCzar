var ventanaPequena = window.matchMedia("(max-width: 800px)");
var ventanaMediana = window.matchMedia("(min-width: 800px) and (max-width: 1300px)");
var ventanaGrande = window.matchMedia("(min-width: 1300px)");
var leftSlider = document.querySelector('.left__btn');
var rightSlider = document.querySelector('.right__btn');
var guitarTape = document.querySelector('.instruments__tape');
var mastil = document.querySelector('.characteristics__one');
var body = document.querySelector('.characteristics__two');
var palanca = document.querySelector('.characteristics__three');
var titleOne = document.querySelector('.one');
var titleTwo = document.querySelector('.two');
var titleThree = document.querySelector('.three');

var draw = setInterval(draw, 17);
var contador = 0;

//pass the tape of guitars
rightSlider.addEventListener("click", function () {

    if (ventanaMediana.matches) {
        guitarTape.style.left = '-91%';

    }

    if (ventanaPequena.matches) {
        if (contador == 0) guitarTape.style.left = '-98%';
        if (contador == 1) guitarTape.style.left = '-193%';
        if (contador == 2) guitarTape.style.left = '-285%';
        if (contador == 3) guitarTape.style.left = '-380%';
        if (contador == 4) guitarTape.style.left = '-475%';
        if (contador == 5) guitarTape.style.left = '-475%';
        contador += 1;
        if (contador > 5) contador = 5;
    }

});

leftSlider.addEventListener("click", function () {

    if (ventanaMediana.matches) {
        guitarTape.style.left = '0%';

    }

    if (ventanaPequena.matches) {
        if (contador == 0) guitarTape.style.left = '0';
        if (contador == 1) guitarTape.style.left = '0';
        if (contador == 2) guitarTape.style.left = '-98%';
        if (contador == 3) guitarTape.style.left = '-193%';
        if (contador == 4) guitarTape.style.left = '-285%';
        if (contador == 5) guitarTape.style.left = '-380%';
        contador -= 1;
        if (contador < 0) contador = 0;
    }

});

function draw() {
    console.log(pageYOffset);

    if (ventanaGrande.matches) {
        contador = 0;
        guitarTape.style.left = '0%';
    }
    if (ventanaMediana.matches) {

        if (contador > 0 && contador < 3) {
            guitarTape.style.left = '0';
            contador = 0;

        } else if (contador >= 3) {
            guitarTape.style.left = '-91%';
            contador = 0;

        }

    }


    //iinteraction of hot of the month with the scroll

    if (ventanaGrande.matches) {
        //mastil
        if (pageYOffset < 1700) {

            titleOne.style.opacity = '0';
            mastil.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 1700 && pageYOffset < 2254) {
            titleOne.style.opacity = '1';
            mastil.style.marginLeft = '-20px';
        }
        if (pageYOffset > 2254) {
            titleOne.style.opacity = '0';
            mastil.style.marginLeft = '-1200px';
        }
        //body


        if (pageYOffset < 2091) {
            titleTwo.style.opacity = '0';
            body.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 2091 && pageYOffset < 2890) {
            titleTwo.style.opacity = '1';
            body.style.marginLeft = '-20px';
        }
        if (pageYOffset > 2890) {
            titleTwo.style.opacity = '0';
            body.style.marginLeft = '-1200px';
        }

        //palanca
        if (pageYOffset < 2570) {
            titleThree.style.opacity = '0';
            palanca.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 2570 && pageYOffset < 3254) {
            titleThree.style.opacity = '1';
            palanca.style.marginLeft = '-20px';
        }
        if (pageYOffset > 3200) {
            titleThree.style.opacity = '0';
            palanca.style.marginLeft = '-1200px';
        }

    } else if (ventanaMediana.matches) {

        //mastil
        if (pageYOffset < 1588) {
            titleOne.style.opacity = '0';
            mastil.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 1588 && pageYOffset < 2277) {
            titleOne.style.opacity = '1';
            mastil.style.marginLeft = '-20px';
        }
        if (pageYOffset > 2277) {
            titleOne.style.opacity = '0';
            mastil.style.marginLeft = '-1200px';
        }

        //body


        if (pageYOffset < 2029) {
            titleTwo.style.opacity = '0';
            body.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 2029 && pageYOffset < 2729) {
            titleTwo.style.opacity = '1';
            body.style.marginLeft = '-20px';
        }
        if (pageYOffset > 2729) {
            titleTwo.style.opacity = '0';
            body.style.marginLeft = '-1200px';
        }

        //palanca
        if (pageYOffset < 2329) {
            titleThree.style.opacity = '0';
            palanca.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 2339 && pageYOffset < 2929) {
            titleThree.style.opacity = '1';
            palanca.style.marginLeft = '-20px';
        }
        if (pageYOffset > 2929) {
            titleThree.style.opacity = '0';
            palanca.style.marginLeft = '-1200px';
        }

    } else if (ventanaPequena.matches) {
        titleOne.style.opacity = '1';
        titleTwo.style.opacity = '1';
        titleThree.style.opacity = '1';

        //mastil
        if (pageYOffset < 1320) {

            mastil.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 1320 && pageYOffset < 1830) {

            mastil.style.marginLeft = '-20px';
        }
        if (pageYOffset > 1830) {

            mastil.style.marginLeft = '-1200px';
        }

        //body


        if (pageYOffset < 1630) {

            body.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 1630 && pageYOffset < 2160) {

            body.style.marginLeft = '-20px';
        }
        if (pageYOffset > 2160) {

            body.style.marginLeft = '-1200px';
        }

        //palanca
        if (pageYOffset < 2244) {

            palanca.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 2244 && pageYOffset < 2690) {

            palanca.style.marginLeft = '-20px';
        }
        if (pageYOffset > 2690) {

            palanca.style.marginLeft = '-1200px';
        }

    }





}