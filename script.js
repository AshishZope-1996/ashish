function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

// Hide menu after clicking on link for mobile responsiveness
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        const nav = document.getElementById('nav');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
