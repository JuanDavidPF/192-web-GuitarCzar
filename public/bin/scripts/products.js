var ventanaPequena = window.matchMedia("(max-width: 800px)");

var links = document.querySelectorAll('.mainNav__link');
var btnBurguer = document.querySelector('.hamburgerButton');
var searchBar = document.querySelector('.mainheader__srchBar');
var burguerGlass = document.querySelector('.burguerGlass');
var navTop = document.querySelector('.mainHeader__top');
var navBottom = document.querySelector('.mainHeader__bottom');
var productLink = document.querySelectorAll('.productCard--info');


var productModal = document.querySelector('.product--modal');
var modalWrapper = document.querySelector('.product--modalWrapper');
var mainContent = document.querySelector('.noModal');

var id = document.querySelectorAll('._id');
var object = document.querySelectorAll('.object');

var modalBrand = document.querySelector('.modalBrand');
var modalReference = document.querySelector('.modalReference');
var modalPrice = document.querySelector('.modalPrice');


var reference = document.querySelectorAll('.productCard--reference');
var brand = document.querySelectorAll('.productCard--brand');
var price = document.querySelectorAll('.productCard--price');

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

burguerGlass.addEventListener("click", function () {
    searchGlassToggle = !searchGlassToggle;

});

//hamburguer menu

function draw() {
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





//open a modal product

for (let index = 0; index < productLink.length; index++) {
    productLink[index].addEventListener("click", function () {

        modalWrapper.style.display = "block"
        productModal.style.display = "block"

        setTimeout(function () {
            modalWrapper.classList.add('enable');
            productModal.classList.add('enable');
            mainContent.classList.add('blur');

        }, 0.1)

        setTimeout(function () {
            modalBrand.textContent = brand[index].textContent;
            modalReference.textContent = reference[index].textContent;
            modalPrice.textContent = price[index].textContent;
           
            modalPrice.style.opacity = "1"

        }, 800)

    });



}

//close modal

document.addEventListener("click", function (event) {


    if (event.target == modalWrapper) {

        modalWrapper.classList.remove('enable');
        productModal.classList.remove('enable');
        mainContent.classList.remove('blur');
        modalBrand.textContent = ""
        modalReference.textContent = ""
        modalPrice.textContent = ""
       
        modalPrice.style.opacity = "0"

        setTimeout(function () {
            modalWrapper.style.display = "none"

            productModal.style.display = "none"
        }, 500)


    }

})