var ventanaPequena = window.matchMedia("(max-width: 800px)");

var links = document.querySelectorAll('.mainNav__link');
var btnBurguer = document.querySelector('.hamburgerButton');
var searchBar = document.querySelectorAll('.mainheader__srchBar');
var burguerGlass = document.querySelectorAll('.burguerGlass');
var navTop = document.querySelectorAll('.mainHeader__top');
var navBottom = document.querySelectorAll('.mainHeader__bottom');
var productLink = document.querySelectorAll('.productCard--info');


var productModal = document.querySelector('.product--modal');
var modalWrapper = document.querySelector('.product--modalWrapper');
var mainContent = document.querySelector('.noModal');


var modalBrand = document.querySelector('.modalBrand');
var modalReference = document.querySelector('.modalReference');
var modalPrice = document.querySelector('.modalPrice');
var modalImg = document.querySelector('.infoImg');
var modalDes = document.querySelector('.infoDes');

var id = document.querySelectorAll('._id');
var object = document.querySelectorAll('.object');
var fav = document.querySelectorAll('.fav');
var des = document.querySelectorAll('.descripcion');
var reference = document.querySelectorAll('.productCard--reference');
var brand = document.querySelectorAll('.productCard--brand');
var price = document.querySelectorAll('.productCard--price');
var imgCard = document.querySelectorAll('.productCard--image')

var corazon = document.querySelectorAll(".corazon")

var cartCounter = document.querySelector(".contador")
let contador = 0;

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
            modalDes.textContent = des[index].textContent;
            modalImg.src = imgCard[index].src;
            modalImg.style.opacity = "1"
            modalPrice.style.opacity = "1"
            modalDes.style.opacity = "1"

        }, 800)

    });
}

//close modal

document.addEventListener("click", function (event) {


    if (event.target == modalWrapper || event.target == modalPrice) {

        modalWrapper.classList.remove('enable');
        productModal.classList.remove('enable');
        mainContent.classList.remove('blur');
        modalBrand.textContent = ""
        modalReference.textContent = ""
        modalPrice.textContent = ""
        modalDes.textContent = ""
        modalImg.src = ""

        modalPrice.style.opacity = "0"
        modalImg.style.opacity = "0"
        modalDes.style.opacity = "0"


        setTimeout(function () {
            modalWrapper.style.display = "none"

            productModal.style.display = "none"
        }, 500)


    }

})

//open description
let desVisible = true

modalImg.addEventListener("click", function () {
    desVisible = !desVisible

    if (ventanaPequena.matches) {
        if (desVisible) {
            modalDes.classList.add("fadeIn")

            setTimeout(function () {
                modalDes.classList.remove("fadeOut")

                modalDes.style.display = "block"
            }, 500)

        } else if (desVisible == false) {
            modalDes.classList.add("fadeOut")


            setTimeout(function () {
                modalDes.classList.remove("fadeOut")

                modalDes.style.display = "none"
            }, 500)


        }
    }
})


/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////


let favOrNot = [fav.length]

for (let i = 0; i < fav.length; i++) {

    favOrNot[i] = (fav[i].textContent == "true")


    if (favOrNot[i]) {

        corazon[i].src = "./img/fav2.png"
    }
    if (favOrNot[i] == false) {

        corazon[i].src = "./img/fav1.png"

    }

}






for (let i = 0; i < corazon.length; i++) {

    corazon[i].addEventListener("click", function () {

        favOrNot[i] = !favOrNot[i]

        if (favOrNot[i]) {
            corazon[i].src = "./img/fav2.png"
            corazon[i].classList.add("bounceIn")

        }

        if (favOrNot[i] == false) {
            corazon[i].src = "./img/fav1.png"
            corazon[i].classList.add("bounceOut")

        }

        let removerAnimacion = setTimeout(function () {

            corazon[i].classList.remove("bounceIn")
            corazon[i].classList.remove("bounceOut")
        }, 1000)



        fetch(`/api/favoritos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `_id=${id[i].textContent}&fav=${favOrNot[i].toString()}`,



        }) ///cierra el fetch 
    }) //cierra el listener de corazones
}


//buying products


modalPrice.addEventListener("click", function () {

    contador += 1

    let price = modalPrice.textContent.split("$")
    price = price[1]


    setTimeout(function () {
        cartCounter.textContent = contador
        cartCounter.style.opacity = "1"
        cartCounter.classList.add("bounceIn")
    }, 500)

    setTimeout(function () {
        cartCounter.classList.remove("bounceIn")
    }, 1300)


    let imgShop = modalImg.src.split("/thumbnails/")
    imgShop = imgShop[1]

    fetch(`/api/comprarProducto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `brand=${modalBrand.textContent}&reference=${modalReference.textContent}&price=${price}&image=${imgShop}`,



    }) ///cierra el fetch 
})