const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav__links");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

reveals.forEach(element => {
    observer.observe(element);
});
