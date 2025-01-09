//toggle for mobile menu visibility
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

//for the cards' trigger 
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("#recent-achievements");
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  section.classList.add("visible"); 
              } else {
                  section.classList.remove("visible"); 
              }
          });
      },
      {
          threshold: 0.2,
      }
  );

  observer.observe(section);
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
 