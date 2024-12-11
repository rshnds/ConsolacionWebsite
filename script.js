const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility
menuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
});

//second section
function secondSection(){
    document.getElementById('journey-section').scrollIntoView({ behavior: 'smooth' })
}