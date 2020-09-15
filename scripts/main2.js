const carouselBox = document.getElementById("carouselBox");
const overlay = document.getElementById("overlay");
const paths = document.querySelectorAll("path");
const boxMap = document.getElementById("BoxMap");
const boxText = document.getElementById("boxText");
let flaga = true;
var classActive = document.querySelector(".active2")

    overlay.addEventListener("click", function () {
        overlay.style.display = "none"
    })




//         classActive.classList.remove("active2")
//         path.classList.add("active2")
//         carouselBox.style.animationName = "showCarousel";



for(var i=0; i <paths.length; i++){
    paths[i].addEventListener("click", function(){
        
        classActive.removeAttribute('class', 'active2')
        var nameW = this.id;

        this.setAttribute('class',"active2")
        boxMap.style.width = "33vw";
        carouselBox.style.animationName = "showCarousel";

        classActive = document.querySelector(".active2")

        if(flaga){
        setTimeout(function () {
            boxText.innerHTML = "<h4>Wybrałeś województwo: "+ nameW + "</h4>";
            flaga = !flaga
        }, 1100);}
        else{
            boxText.innerHTML = "<h4>Wybrałeś województwo: "+ nameW + "</h4>";
        }
    })
}




setTimeout(function () {
    overlay.style.display = "none"
}, 4500);