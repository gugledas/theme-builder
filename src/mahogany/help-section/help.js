import "./help.html";
import "./help.scss";

// js by tmc with event listener for the theme 
//function test() {
//    alert("welcome in this theme");
//}

function showMe() {
    document.querySelectorAll(".btn-full").forEach(button =>{
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = document.getElementById("content-container");
            const tabNumber = button.dataset.forTab;
            let num = tabNumber.toString();
            const tabToActivate = tabsContainer.querySelector('.content[data-tab='+'"'+ num +'"]');

            sideBar.querySelectorAll('.btn-full').forEach(button => {
                let t = document.getElementsByClassName('btn-full--active');
                for (let index = 0; index < t.length; index++) {
                    t[index].classList.remove('btn-full--active');
                }
                button.classList.remove('btn-full--active');
            });

            tabsContainer.querySelectorAll('.content').forEach(contener => {
                contener.classList.remove('content--active');
            });

            button.classList.add('btn-full--active');
            tabToActivate.classList.add('content--active');

            console.log(sideBar);
            console.log(tabsContainer);
            console.log(tabNumber);
            console.log(tabToActivate);

        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showMe();
});
