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
// click eent for closer btn 
let close = document.getElementById("closer");
let isMe = document.getElementById("mobile-navigation");
let ham = document.getElementById("ham");

ham.addEventListener("click", ()=> {
    isMe.style.display = "block";
})

close.addEventListener("click",()=>{
    close.style.cursor = "pointer";
    isMe.style.display = "none";
});
// display sublink on mobile-menu

document.querySelectorAll("#activable-link").forEach( button => {
    button.addEventListener("click",()=> {
        const num = button.dataset.forTab;
        let numer = num.toString();
        const toShow = document.querySelector('.activable[data-tab='+'"'+ numer +'"]');
        const narrow = document.querySelector('.narrow-bottom[data-nar='+'"'+ numer +'"]');

        narrow.classList.toggle("small-narrow-off");
        toShow.classList.toggle("displayMe");
    });
});

document.querySelectorAll("#sub-activable-link").forEach( button => {

    button.addEventListener("click",()=> {
        const num = button.dataset.forSub;
        let numer = num.toString();
        const toShowSub = document.querySelector('#sub-activable[data-sub='+'"'+ numer +'"]');
        const narrowSub = document.querySelector('.small-narrow-off[data-subnar='+'"'+ numer +'"]');

        narrowSub.classList.toggle("small-narrow-turn");
        toShowSub.classList.toggle("me-display");

        //console.log("ul to show is : " + toShowSub);
        //console.log("narrow to turn is : " + narrowSub);

    });

});