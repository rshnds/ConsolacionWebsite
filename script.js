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

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('[data-animation="true"]');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add classes to trigger animation when section is in view
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    const childElements = entry.target.querySelectorAll('.opacity-0');
                    childElements.forEach((child) => {
                        child.classList.add('opacity-100', 'translate-y-0');
                    });
                } else {
                    // Remove animation classes when section is out of view
                    entry.target.classList.remove('opacity-100', 'translate-y-0');
                    const childElements = entry.target.querySelectorAll('.opacity-100');
                    childElements.forEach((child) => {
                        child.classList.remove('opacity-100', 'translate-y-0');
                    });
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    sections.forEach((section) => observer.observe(section));
});



//for back to top button
const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
if (window.scrollY > 200) { // Adjust value as needed
    backToTopButton.classList.remove('hidden');
} else {
    backToTopButton.classList.add('hidden');
}
});

// Smooth scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});


