import "./hero.html";
import "./hero.scss";
import "../lib/js/jquery-3.6.0.min";

// simple slideshow 
// slide container : container-flex
// mySlides : slider-item
// bullets : slider-bullets 

//$( "dot" ).on ("click" ,function() {
//    console.log("my name is noumel")
//});

/*let index = 1;
showSlides(index);

// try specific 
document.getElementById('dot-two').addEventListener("click", function(){
    currentSlider(0);
});
document.getElementById('dot-three').addEventListener("click", function(){
    currentSlider(1);
});
document.getElementById('dot-three').addEventListener("click", function(){
    currentSlider(-1);
});

// function for sliding
function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("slider-item");
    let dots = document.getElementsByClassName("dot");
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    index ++;
    if(index > slides.length) {index = 1}
    for(i=0;i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index-1].className += " active";
    setTimeout(showSlides, 7000);
    
}
// show specific slide () ...
function currentSlider(j) {
    showSlides(j);
}*/