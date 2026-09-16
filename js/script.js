const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");


// Open / close menu
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Close menu when a link is clicked
const navLinks = navbar.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});