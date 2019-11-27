var ventanaPequena = window.matchMedia("(max-width: 800px)");

var links = document.querySelectorAll('.mainNav__link');
var btnBurguer = document.querySelector('.hamburgerButton');
var searchBar = document.querySelectorAll('.mainheader__srchBar');
var burguerGlass = document.querySelectorAll('.burguerGlass');
var navTop = document.querySelectorAll('.mainHeader__top');
var navBottom = document.querySelectorAll('.mainHeader__bottom');
var productLink = document.querySelectorAll('.productCard--info');
var deleteBtn = document.querySelectorAll('.delete ');
var productoImg = document.querySelectorAll('.productCard--image');
var producto = document.querySelectorAll('.productCard')
var price = document.querySelectorAll(".productCard--price")
var contador = document.querySelector(".contador");
var id = document.querySelectorAll('._id');
var carrito = document.querySelector(".carrito")
var equis = document.querySelector(".modalX")
var btn = document.querySelector(".nextBtn")
var btnBack = document.querySelectorAll(".backBtn")
var inputs = document.querySelectorAll(".inputs")
inputs[1].style.display = "none"
inputs[2].style.display = "none"
var productModal = document.querySelector('.product--modal');
var modalWrapper = document.querySelector('.product--modalWrapper');
var mainContent = document.querySelector('.noModal');


var costo = 0;

var hamburguerToggle = false;
var searchGlassToggle = false;
var draw = setInterval(draw, 17);


var nameInput = document.querySelector(".name")
var lastnameInput = document.querySelector(".lastname")
var emailInput = document.querySelector(".email")
var phoneInput = document.querySelector(".phone")
var countryInput = document.querySelector(".country")
var stateInput = document.querySelector(".state")
var cityInput = document.querySelector(".city")

var cardInput = document.querySelector(".card")
var dateInput = document.querySelector(".date")
var cvcInput = document.querySelector(".cvc")
var total = document.querySelector(".total")

var billName = document.querySelector(".billName")
var billContact = document.querySelector(".billContact")
var billLocation = document.querySelector(".billRegion")

let name;
let lastname;
let email;
let phone;
let country;
let state;
let city;
let card;
let date;
let cvc;



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
        searchBar[0].style.transition = 'width 0s, opacity 0s';
        searchBar[0].style.width = '100%';
        searchBar[0].style.opacity = '1';
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


//priceCalculator

for (let i = 0; i < price.length; i++) {

    let precio = price[i].textContent.split("$")

    precio = parseInt(precio[1])
    costo += precio
    contador.textContent = "$" + costo

}





//deleting products

for (let i = 0; i < deleteBtn.length; i++) {

    deleteBtn[i].addEventListener("click", function () {

        producto[i].classList.remove("fadeIn")
        producto[i].classList.add("bounceOut")
        producto[i].style.width = "0"
        producto[i].style.height = "0"
        productLink[i].style.fontSize = "0"
        price[i].style.fontSize = "0"
        productoImg[i].style.height = "0"
        deleteBtn[i].style.opacity = "0"


        //descontar del total

        precio = contador.textContent.split("$")
        precio = parseInt(precio[1])
        costo = price[i].textContent.split("$")
        costo = parseInt(costo[1])
        precio -= costo
        contador.textContent = "$" + precio
        contador.classList.add("bounceIn")


        setTimeout(function () {
            contador.classList.remove("bounceIn")
            producto[i].style.display = "none"
            document.location.href = "./cart"
        }, 1000)





        fetch(`/api/borrarProducto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `_id=${id[i].textContent}`,


        }) ///cierra el fetch 
    })

}



//checkout


carrito.addEventListener("click", function () {
    if (contador.textContent != "$0" && contador.textContent != "0") {
        modalWrapper.style.display = "block"
        productModal.style.display = "block"


        setTimeout(function () {
            modalWrapper.classList.add('enable');
            productModal.classList.add('enable');
            mainContent.classList.add('blur');

        }, 0.1)

        setTimeout(function () {


        }, 800)
    }
});


//checkout

document.addEventListener("click", function (event) {


    if (event.target == modalWrapper || event.target == equis) {

        modalWrapper.classList.remove('enable');
        productModal.classList.remove('enable');
        mainContent.classList.remove('blur');


        setTimeout(function () {
            modalWrapper.style.display = "none"

            productModal.style.display = "none"
        }, 500)


    }

})


let check = 0;
btn.addEventListener("click", function () {


    if (check == 0) {

        if (nameInput.value.length > 0 && lastnameInput.value.length > 0 && emailInput.value.length > 0 &&
            phoneInput.value.length > 0 && countryInput.value.length > 0 && stateInput.value.length > 0 &&
            cityInput.value.length > 0 && emailInput.value.includes("@") && emailInput.value.includes(".com")) {

            check = 1

            name = nameInput.value
            lastname = lastnameInput.value
            email = emailInput.value
            phone = phoneInput.value
            country = countryInput.value
            state = stateInput.value
            city = cityInput.value

            inputs[1].classList.remove("slideOutRight")
            inputs[0].classList.add("slideOutLeft")
            setTimeout(function () {
                inputs[0].style.display = "none"

                inputs[1].style.display = "block"

                setTimeout(function () {

                    inputs[1].classList.add("slideInRight")
                }, 1)
            }, 1000)

        } else {
            alert("Fill the missing fields")

            if (nameInput.value.length == 0) nameInput.style.borderColor = "red"
            if (lastnameInput.value.length == 0) lastnameInput.style.borderColor = "red"
            if (emailInput.value.length == 0) emailInput.style.borderColor = "red"
            if (phoneInput.value.length == 0) phoneInput.style.borderColor = "red"
            if (countryInput.value.length == 0) countryInput.style.borderColor = "red"
            if (stateInput.value.length == 0) stateInput.style.borderColor = "red"
            if (cityInput.value.length == 0) cityInput.style.borderColor = "red"
            if (emailInput.value.includes("@") == false && emailInput.value.includes(".com") == false) {
                alert("Insert a valid E-mail")
            }

        }

    } else if (check == 1) {



        if (cardInput.value.length == 16 && dateInput.value.length == 7 &&
            cvcInput.value.length == 3) {

            check = 2

            card = cardInput.textContent;
            date = dateInput.textContent;
            cvc = cvcInput.textContent;


            inputs[2].classList.remove("slideOutRight")
            inputs[1].classList.remove("slideInRight")
            inputs[1].classList.add("slideOutLeft")

            btn.textContent = "FINISH"
            total.textContent = contador.textContent
            billName.textContent = name + " " + lastname
            billContact.textContent = email + " - " + phone
            billLocation.textContent = country + " - " + state + " - " + city

            setTimeout(function () {
                inputs[1].style.display = "none"
                inputs[2].style.display = "block"

                setTimeout(function () {

                    inputs[2].classList.add("slideInRight")
                }, 1)

            }, 1000)

        } else {
            alert("Fill the missing fields")

            if (cardInput.value.length == 0) cardInput.style.borderColor = "red"
            if (dateInput.value.length == 0) dateInput.style.borderColor = "red"
            if (cvcInput.value.length == 0) cvcInput.style.borderColor = "red"
        }


    } else if (check == 2) {

        let costo = total.textContent.split("$")
        costo = costo[1]

        //comprar y agregar el recibo

        fetch(`/api/nuevoRecibo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${name}&phone=${phone}&email=${email}&country=${country}&state=${state}&city=${city}&total=${costo}`,


        }) ///cierra el fetch 


        modalWrapper.classList.remove('enable');
        productModal.classList.remove('enable');
        mainContent.classList.remove('blur');


        setTimeout(function () {
            modalWrapper.style.display = "none"
            productModal.style.display = "none"
            document.location.href = "./cart"
        }, 500)

    }

})




for (let i = 0; i < btnBack.length; i++) {
    btnBack[i].addEventListener("click", function () {

        if (check == 1) {

            check = 0

            inputs[0].classList.remove("slideOutLeft")
            inputs[1].classList.add("slideOutRight")


            setTimeout(function () {
                inputs[0].style.display = "block"

                inputs[1].style.display = "none"

                setTimeout(function () {

                    inputs[0].classList.add("slideInLeft")
                }, 1)
            }, 1000)
        }

        if (check == 2) {

            check = 1

            inputs[1].classList.remove("slideOutLeft")
            inputs[2].classList.add("slideOutRight")


            setTimeout(function () {
                inputs[1].style.display = "block"

                inputs[2].style.display = "none"

                setTimeout(function () {

                    inputs[1].classList.add("slideInLeft")
                }, 1)
            }, 1000)

            btn.textContent = "NEXT"
        }
    })

}