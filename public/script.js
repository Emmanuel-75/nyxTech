const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const burgerSrc = document.querySelector("#burgerSrc")
let isOpen = false;


burger.addEventListener("click", () => {
  menu.classList.toggle("max-h-0");
  menu.classList.toggle("max-h-96");
  menu.classList.toggle("opacity-0");
  menu.classList.toggle("opacity-100");
  if (isOpen){
    burgerSrc.setAttribute("d", "M3 6h18M3 12h18M3 18h18");
    isOpen = false;
  }else{
    burgerSrc.setAttribute("d", "M6 18L18 6M6 6l12 12");
    isOpen = true;
  }
});