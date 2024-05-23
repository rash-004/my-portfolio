function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function redirectToDesktopVersion() {
    if (isMobile() && !window.location.href.includes('desktop')) {
        window.location.href = window.location.href + '?desktop=true';
    }
}

redirectToDesktopVersion();


const hamburger_menu = document.querySelector(".hamburger_menu");
const background = document.querySelector(".background");

hamburger_menu.addEventListener("click", () => {
    background.classList.toggle("active");
})

/*navigation -bar change color*/
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('home').addEventListener('click', function() {
    document.getElementById('main').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('about_me').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('educ').addEventListener('click', function() {
    document.getElementById('education').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('ex_act').addEventListener('click', function() {
    document.getElementById('extra').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('proj').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('cont').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

