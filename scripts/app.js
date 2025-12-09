const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".header-icon");
const menuIcon = document.querySelector(".header-icon i");


menuBtn.addEventListener("click", () => {

    if (menuIcon.classList.contains("fa-bars")) {
        menu.style.left = "0"
        menuIcon.classList = "fa fa-times";
    } else {
        menu.style.left = "-276px"
        menuIcon.classList = "fa fa-bars";
    }
})