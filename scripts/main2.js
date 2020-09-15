//FOR IE
const carouselBox = document.getElementById("carouselBox");
const overlay = document.getElementById("overlay");
const paths = document.querySelectorAll("path");
const boxText = document.getElementById("boxText");
var classActive = document.querySelector(".active2")
const svGG = document.getElementsByTagName("svg")
let flaga = true;

//off input screen after click
overlay.addEventListener("click", function () {
    overlay.style.display = "none"
})

//add liste and action on the map and carrousel
for (var i = 0; i < paths.length; i++) {
    paths[i].addEventListener("click", function () {
        classActive.removeAttribute('class', 'active2');
        var nameW = this.id;
        this.setAttribute('class', "active2");
        svGG[0].style.height = "45vh";
        carouselBox.style.animationName = "showCarousel";
        classActive = document.querySelector(".active2");

        //add text
        if (flaga) {
            setTimeout(function () {
                boxText.innerHTML = "<h4>Wybrałeś województwo: " + nameW + "</h4>";
                flaga = !flaga
            }, 1100);
        } else {
            boxText.innerHTML = "<h4>Wybrałeś województwo: " + nameW + "</h4>";
        }
    })
}

//OFF Input screen time-out
setTimeout(function () {
    overlay.style.display = "none"
}, 4500);