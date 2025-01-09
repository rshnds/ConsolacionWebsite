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


 