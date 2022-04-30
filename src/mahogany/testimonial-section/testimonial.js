import "./testimonial.html";
import "./testimonial.scss";

// testimonial code there : 
let index = 1;

// start slider : 
slider(index)
// try specific 
document.getElementById('dot-two').addEventListener("click", function(){
    currentSlider(0);
});


// function slider () ...
function slider(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    index ++;
    if(index > slides.length) {index = 1}
    for(i=0;i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" checked", "");
    }
    slides[index - 1].style.display = "block";
    dots[index-1].className += " checked";
    setTimeout(slider, 7000); // Change image every 2 seconds
}
// show specific slide () ...
function currentSlider(j) {
    slider(j);
}