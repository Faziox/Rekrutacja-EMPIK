const carouselBox = document.getElementById("carouselBox")
const overlay = document.getElementById("overlay")
const paths = document.querySelectorAll("path")
const boxMap = document.getElementById("BoxMap")


overlay.addEventListener("click", ()=>{overlay.style.display = "none"})

paths.forEach(path =>{
    path.addEventListener("click", ()=>{
    const classActive = document.querySelector(".active2")
    classActive.classList.remove("active2")
    path.classList.add("active2")
    carouselBox.style.animationName = "showCarousel";
    boxMap.style.width = "34vw";

})
})

setTimeout(() => {
    overlay.style.display = "none"
}, 4500);