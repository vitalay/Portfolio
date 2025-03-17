const header = document.querySelector(".header");
const burger = header.querySelector(".burger-menu");
const burgerIcom = header.querySelector(".burger-menu__icon");

burger.addEventListener("click", function(){
  header.classList.toggle("header--mobile");
  if ( header.classList.contains("header--mobile")) {
    burgerIcom.src="images/clous.svg";
  } else {
       burgerIcom.src="images/burger-menu.svg";

  }

});

