import "./header.html";
import "./header.scss";

//alert("js ok");
// onscroll effect : 
window.onscroll = function () {
    scrollIt();
}

function scrollIt() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        let a = document.getElementById("mobile-menu");
        a.style.bottom = "80rem";;
    } else {
        let a = document.getElementById("mobile-menu");
    }
}