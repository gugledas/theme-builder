import "./help.html";
import "./help.scss";

// js by tmc with event listener for the theme 

let dis = document.getElementById("btn-two");

dis.addEventListener("click",displayMe);

function displayMe() {
    bloc = document.getElementById("content-two");
    bloc.style.display = "block";
}

