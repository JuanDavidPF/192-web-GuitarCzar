var btnBurguer = document.querySelector('.hamburgerButton');
var ventanaPequena = window.matchMedia("(max-width: 800px)");
var searchBar = document.querySelector('.mainheader__srchBar');
var burguerGlass = document.querySelector('.burguerGlass');
var navTop = document.querySelector('.mainHeader__top');
var navBottom = document.querySelector('.mainHeader__bottom');
var productLink = document.querySelectorAll('.productCard--info');
var productModal = document.querySelector('.product--modal');
var modalWrapper = document.querySelector('.product--modalWrapper');
var mainContent = document.querySelector('.noModal');
var id = document.querySelectorAll('._id');
var oldId;
var object = document.querySelectorAll('.object');
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



    });
}

//close modal

document.addEventListener("click", function (event) {


    if (event.target == modalWrapper) {

        modalWrapper.classList.remove('enable');
        productModal.classList.remove('enable');
        mainContent.classList.remove('blur');

        setTimeout(function () {
            modalWrapper.style.display = "none"

            productModal.style.display = "none"
        }, 500)


    }

})