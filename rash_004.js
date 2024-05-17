const hamburger_menu = document.querySelector(".hamburger_menu");
const background = document.querySelector(".background");

hamburger_menu.addEventListener("click", () => {
    background.classList.toggle("active");
})

document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('about_me').scrollIntoView({
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('educ').addEventListener('click', function() {
    document.getElementById('education').scrollIntoView({
        behavior: 'smooth'
    });
});
