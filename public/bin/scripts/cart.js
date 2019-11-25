var ventanaPequena = window.matchMedia("(max-width: 800px)");

var links = document.querySelectorAll('.mainNav__link');
var btnBurguer = document.querySelector('.hamburgerButton');
var searchBar = document.querySelectorAll('.mainheader__srchBar');
var burguerGlass = document.querySelectorAll('.burguerGlass');
var navTop = document.querySelectorAll('.mainHeader__top');
var navBottom = document.querySelectorAll('.mainHeader__bottom');
var productLink = document.querySelectorAll('.productCard--info');
var deleteBtn = document.querySelectorAll('.delete');

var hamburguerToggle = false;
var searchGlassToggle = false;
var draw = setInterval(draw, 17);




//opening the hamburguer menu
btnBurguer.addEventListener("click", function () {
    btnBurguer.classList.toggle("change");
    hamburguerToggle = !hamburguerToggle;
    searchGlassToggle = false;

});


//opening the search bar from hamburguer meno

burguerGlass[1].addEventListener("click", function () {
    searchGlassToggle = !searchGlassToggle;

});


//hamburguer menu

function draw() {
    if (ventanaPequena.matches) {


        if (searchGlassToggle) {
            searchBar[1].style.width = '60%';
            searchBar[1].style.opacity = '1';
            searchBar[1].style.transition = 'width .7s';
            burguerGlass[1].style.marginLeft = '70%';

        } else {
            searchBar[1].style.width = '0%';
            searchBar[1].style.opacity = '0';
            searchBar[1].style.transition = 'width .7s, opacity 0s .7s';
            burguerGlass[1].style.marginLeft = '0px';

        }

        if (hamburguerToggle) {
            navTop[1].style.top = '75px';
            navBottom[1].style.top = '110px';
        } else if (hamburguerToggle == false) {
            navTop[1].style.top = '-125px';
            navBottom[1].style.top = '-180px';
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



//change color


if (document.location.href.includes("guitar")) {
    links[0].style.color = "#F25252"
    links[0].style.textShadow = "0 0 .20px #F25252, 0 0 .20px #F25252, 0 0 .9px #F25252"
}
if (document.location.href.includes("bass")) {
    links[1].style.color = "#F25252"
    links[1].style.textShadow = "0 0 .20px #F25252, 0 0 .20px #F25252, 0 0 .9px #F25252"
}
if (document.location.href.includes("amp")) {
    links[2].style.color = "#F25252"
    links[2].style.textShadow = "0 0 .20px #F25252, 0 0 .20px #F25252, 0 0 .9px #F25252"
}
if (document.location.href.includes("accessories")) {
    links[3].style.color = "#F25252"
    links[3].style.textShadow = "0 0 .20px #F25252, 0 0 .20px #F25252, 0 0 .9px #F25252"
}