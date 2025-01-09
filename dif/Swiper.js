const carousel = document.querySelector('.carousel');
let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 2;  // Adjust scroll speed
    if (scrollAmount >= carousel.scrollWidth) {
        scrollAmount = 0;  // Reset scroll position after reaching the end
    }
    carousel.scrollLeft = scrollAmount;
}

// Set interval to scroll every 5 seconds (5000 milliseconds)
setInterval(autoScroll, 50);

AOS.init({
    offset: 200, // Default offset for animations
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Easing style
    delay: 100, // Delay between elements
    });

