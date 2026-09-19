const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const sidebarClose = document.getElementById("sidebarClose");
const menuBackdrop = document.getElementById("menuBackdrop");


const closeMenu = () => {
    navbar.classList.remove("active");
    menuBackdrop.classList.remove("active");
    document.body.classList.remove("menu-open");
};


menuBtn.addEventListener("click", () => {
    navbar.classList.add("active");
    menuBackdrop.classList.add("active");
    document.body.classList.add("menu-open");
});

sidebarClose.addEventListener("click", closeMenu);
menuBackdrop.addEventListener("click", closeMenu);


// Close menu when a link is clicked
const navLinks = navbar.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});