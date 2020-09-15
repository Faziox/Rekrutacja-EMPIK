const carouselBox = document.getElementById("carouselBox")
const overlay = document.getElementById("overlay")
const paths = document.querySelectorAll("path")
const boxMap = document.getElementById("BoxMap")
const boxText = document.getElementById("boxText")
let classActive =

    overlay.addEventListener("click", function () {
        overlay.style.display = "none"
    })

paths.forEach(path => {
    path.addEventListener("click", () => {
        const classActive = document.querySelector(".active2")
        classActive.classList.remove("active2")
        path.classList.add("active2")
        console.log(path.id)
        carouselBox.style.animationName = "showCarousel";
        boxMap.style.width = "33vw";
        setTimeout(function () {
            boxText.innerHTML = `<h4>Wybrałeś województwo: ${path.id}</h4>`
        }, 1100);


    })
})




setTimeout(function () {
    overlay.style.display = "none"
}, 4500);