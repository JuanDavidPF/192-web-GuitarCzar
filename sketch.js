var mainCover = document.querySelector('.mainHeader__cover');

setInterval(draw, 17);
setInterval(hiloCoverSlideShow, 7000);

var counterCover = 0;


function hiloCoverSlideShow() {
    counterCover++;
    if (counterCover == 5) counterCover = 0;
}



function draw() {  
    
    switch (counterCover) {
        case 0:
            mainCover.style.backgroundImage = 'url("./data/mainCover0.png")';

            break;

        case 1:
            mainCover.style.backgroundImage = 'url("./data/mainCover1.png")';
            break;

        case 2:
            mainCover.style.backgroundImage = 'url("./data/mainCover2.png")';
            break;

        case 3:
            mainCover.style.backgroundImage = 'url("./data/mainCover3.png")';
            break;

        case 4:
            mainCover.style.backgroundImage = 'url("./data/mainCover4.png")';
            break;


    }
}