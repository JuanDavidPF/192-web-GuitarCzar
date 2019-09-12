var ventanaPequena = window.matchMedia("(max-width: 800px)");
var ventanaMediana = window.matchMedia("(min-width: 800px) and (max-width: 1300px)");
var ventanaGrande = window.matchMedia("(min-width: 1300px)");
var leftSlider = document.querySelector('.left__btn');
var rightSlider = document.querySelector('.right__btn');
var guitarTape = document.querySelector('.instruments__tape');
var mastil = document.querySelector('.characteristics__one');
var body = document.querySelector('.characteristics__two');
var palanca = document.querySelector('.characteristics__three');
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
        if (pageYOffset < 1600) {
            mastil.style.transition = 'margin-left .5s ease-out';
            mastil.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 1600 && pageYOffset < 2254) {
            mastil.style.transition = 'margin-left 1s ease-out';
            mastil.style.marginLeft = '-20px';
        }
        if (pageYOffset > 2400) {
            body.style.transition = 'margin-left .5s ease-out';
            mastil.style.marginLeft = '-1200px';
        }
        //body


        if (pageYOffset < 2091) {
            body.style.transition = 'margin-left .5s ease-out';
            body.style.marginLeft = '2200px';
        }
        if (pageYOffset > 2091 && pageYOffset < 2890) {
            body.style.transition = 'margin-left 1s ease-out';
            body.style.marginLeft = '44%';
        }
        if (pageYOffset > 2890) {
            body.style.transition = 'margin-left .5s ease-out';
            body.style.marginLeft = '2200px';
        }

        //palanca
        if (pageYOffset < 2570) {
            palanca.style.transition = 'margin-left .5s ease-out';
            palanca.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 2570 && pageYOffset < 3254) {
            palanca.style.transition = 'margin-left 1s ease-out';
            palanca.style.marginLeft = '-20px';
        }
        if (pageYOffset > 3200) {
            body.style.transition = 'margin-left .5s ease-out';
            palanca.style.marginLeft = '-1200px';
        }

    } else if (ventanaMediana.matches) {

        //mastil
        if (pageYOffset < 1588) {
            mastil.style.transition = 'margin-left .5s ease-out';
            mastil.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 1588 && pageYOffset < 2277) {
            mastil.style.transition = 'margin-left 1s ease-out';
            mastil.style.marginLeft = '-20px';
        }
        if (pageYOffset > 2277) {
            body.style.transition = 'margin-left .5s ease-out';
            mastil.style.marginLeft = '-1200px';
        }

        //body


        if (pageYOffset < 2029) {
            body.style.transition = 'margin-left .5s ease-out';
            body.style.marginLeft = '2200px';
        }
        if (pageYOffset > 2029 && pageYOffset < 2729) {
            body.style.transition = 'margin-left 1s ease-out';
            body.style.marginLeft = '44%';
        }
        if (pageYOffset > 2729) {
            body.style.transition = 'margin-left .5s ease-out';
            body.style.marginLeft = '2200px';
        }

        //palanca
        if (pageYOffset < 2329) {
            palanca.style.transition = 'margin-left .5s ease-out';
            palanca.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 2339 && pageYOffset < 2929) {
            palanca.style.transition = 'margin-left 1s ease-out';
            palanca.style.marginLeft = '-20px';
        }
        if (pageYOffset > 2929) {
            palanca.style.transition = 'margin-left .5s ease-out';
            palanca.style.marginLeft = '-1200px';
        }

    } else if (ventanaPequena.matches) {

        //mastil
        if (pageYOffset < 1264) {
            mastil.style.transition = 'margin-left .5s ease-out';
            mastil.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 1264 && pageYOffset < 1859) {
            mastil.style.transition = 'margin-left 1s ease-out';
            mastil.style.marginLeft = '-20px';
        }
        if (pageYOffset > 1859) {
            mastil.style.transition = 'margin-left .5s ease-out';
            mastil.style.marginLeft = '-1200px';
        }

        //body


        if (pageYOffset < 1360) {
            body.style.transition = 'margin-left .5s ease-out';
            body.style.marginLeft = '2200px';
        }
        if (pageYOffset > 1360 && pageYOffset < 2107) {
            body.style.transition = 'margin-left 1s ease-out';
            body.style.marginLeft = '44%';
        }
        if (pageYOffset > 2107) {
            body.style.transition = 'margin-left .5s ease-out';
            body.style.marginLeft = '2200px';
        }

        //palanca
        if (pageYOffset < 1761) {
            palanca.style.transition = 'margin-left .5s ease-out';
            palanca.style.marginLeft = '-1200px';
        }
        if (pageYOffset > 1761 && pageYOffset < 2429) {
            palanca.style.transition = 'margin-left 1s ease-out';
            palanca.style.marginLeft = '-20px';
        }
        if (pageYOffset > 2429) {
            palanca.style.marginLeft = '-1200px';
        }

    }





}