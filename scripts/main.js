//for web browsers other than IE
const carouselBox = document.getElementById("carouselBox")
const overlay = document.getElementById("overlay")
const paths = document.querySelectorAll("path")
const boxMap = document.getElementById("BoxMap")
const boxText = document.getElementById("boxText")


//off input screen after click
overlay.addEventListener("click", function () {
    overlay.style.display = "none"
})

//add liste and action on the map and carrousel
paths.forEach(path => {
    path.addEventListener("click", () => {
        const classActive = document.querySelector(".active2")
        classActive.classList.replace("ww", "wwvisited")
        classActive.classList.remove("active2")
        path.classList.add("active2")
        console.log(path.id)
        carouselBox.style.animationName = "showCarousel";
        boxMap.style.width = "33vw";

        //add text
        setTimeout(function () {
            boxText.innerHTML = `<h4>Wybrałeś województwo: ${path.id}</h4>`
        }, 1100);


    })
})

//OFF Input screen time-out
setTimeout(function () {
    overlay.style.display = "none"
}, 4500);