const hamburger_menu = document.querySelector(".hamburger_menu");
const background = document.querySelector(".background");

hamburger_menu.addEventListener("click", () => {
    background.classList.toggle("active");
})
