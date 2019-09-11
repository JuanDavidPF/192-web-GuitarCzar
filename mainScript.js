var ventanaPequena = window.matchMedia("(max-width: 800px)");
var ventanaMediana = window.matchMedia("(min-width: 800px) and (max-width: 1300px)");
var ventanaGrande = window.matchMedia("(min-width: 1300px)");
var leftSlider = document.querySelector('.left__btn');
var rightSlider = document.querySelector('.right__btn');
var guitarTape = document.querySelector('.instruments__tape');
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
    console.log(contador);
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


}