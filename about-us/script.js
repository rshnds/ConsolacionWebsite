const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

//toggle for mobile menu visibility
menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
