import "./header.html";
import "./header.scss";
import "../assets/js/jquery-3.6.0.min";
//$(document).ready(function(){});
jQuery(function() { });

//alert("js ok");

/**
 * mobile nav-bar activation with js 
 */
on("click",".mobile-nav-toggle", function(e){
    alert("this event listener is ok dukes");
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toogle("bi-list");
    this.classList.toggle("bi-x");
});

/**
 * mobile nav dropdowns activation
 */
on("click",
   ".navbar .dropdown > a",
   function (e) {
       if(select("#navbar").classList.contains("navbar-mobile")){
           e.preventDefault();
           this.nextElementSibling.classList.toggle("dropdown-active")
       }
   }
);