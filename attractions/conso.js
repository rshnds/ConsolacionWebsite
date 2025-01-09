
const contentData = {
    northPeak: {
        bgImage: "images/north_peak-1.jpg",
        title: "NORTH PEAK CAFE",
        location: "Brgy. Panoypoy, Consolacion",
        description: "North Peak Cafe offers stunning mountain views, cozy ambiance, and delicious coffee that makes it a perfect getaway spot.",
        buttonText: "Explore North Peak Cafe",
        gradient: {
            from: "hsla(174, 87%, 17%, 0.7)",
            via: "hsla(174, 87%, 17%, 0.4)",
            to: "transparent"
        }
    }, 
    greenlandCabin: {
        bgImage: "images/greenland-1.jpg",
        title: "GREENLAND CABINS",
        location: "Brgy. Panoypoy, Consolacion",
        description:
            "Greenland Cabins provide a serene experience in a lush green environment, ideal for relaxation and retreats.",
        buttonText: "Explore Greenland Cabins",
        gradient: {
            from: "hsla(174, 87%, 17%, 0.6)",
            via: "hsla(174, 87%, 17%, 0.4)",
            to: "transparent"
        }
    },
    highlandEcofarm: {
        bgImage: "images/mango_ecofarm-1.jpg",
        title: "HIGHLAND MANGO ECOFARM",
        location: "Brgy. Panoypoy, Consolacion",
        description: "Highland Mango Ecofarm provide a serene experience in a lush green environment, ideal for relaxation and retreats.",
        buttonText: "Explore Highland Mango Ecofarm",
        gradient: {
            from: "hsla(53, 89%, 15%, 0.7)",
            via: "hsla(153, 89%, 15%, 0.5)",
            to: "transparent"
        }
    },
    woolooResort: {
        bgImage: "images/wooloo-3_upscaled.jpg",
        title: "WOOLOO RESORT",
        location: "Brgy. Garing, Consolacion",
        description: "The Wooloo Resort is the ideal getaway from the hustle and bustle of the city. A beautifully constructed main bamboo house can accommodate up to 12 people.",
        buttonText: "Explore Wooloo Resort",
        gradient: {
            from: "hsla(69,45%,12%,0.5)",
            via: "hsla(69,45%,12%, 0.4)",
            to: "transparent"
        }
    }
};

// // Carousel navigation (next/previous)
// let currentIndex = 0;
// const items = document.querySelectorAll(".carousel-item");
// const totalItems = items.length;

// document.getElementById("next-button").addEventListener("click", function () {
//     // Hide the current carousel item
//     items[currentIndex].classList.add("hidden");

//     // Move to the next item
//     currentIndex = (currentIndex + 1) % totalItems;

//     // Show the new carousel item
//     items[currentIndex].classList.remove("hidden");
// });

// document.getElementById("prev-button").addEventListener("click", function () {
//     // Hide the current carousel item
//     items[currentIndex].classList.add("hidden");

//     // Move to the previous item
//     currentIndex = (currentIndex - 1 + totalItems) % totalItems;

//     // Show the new carousel item
//     items[currentIndex].classList.remove("hidden");
// });

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

// Function to show a specific slide
function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.add("hidden"); // Hide all items
    if (i === index) item.classList.remove("hidden"); // Show active item
  });
}

// Move to the next slide
function nextSlide() {
  items[currentIndex].classList.add("hidden");
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].classList.remove("hidden");
}

// Move to the previous slide
function prevSlide() {
  items[currentIndex].classList.add("hidden");
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  items[currentIndex].classList.remove("hidden");
}

// Bind buttons
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

nextButton.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

// Auto-transition between slides every 5 seconds
let slideInterval = setInterval(nextSlide, 3000);

// Reset auto-slide when user interacts
function resetAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}

// Initialize the first slide
showSlide(currentIndex);



function wooloo(){
    window.location.href = "wooloo.html";
}

function changeContent(dataKey) {
    const data = contentData[dataKey];
    if (!data) {
        console.error(`No content found for ID: ${dataKey}`);
        return;
    }

    // Update background
    document.body.style.backgroundImage = `url('${data.bgImage}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    // Update dynamic content
    document.getElementById("dynamic-title").textContent = data.title;
    document.getElementById("description-loc").textContent = data.location;
    document.getElementById("dynamic-description").textContent = data.description;

    // Update button
    const button = document.getElementById("dynamic-button");
    button.textContent = data.buttonText;

    //update button fucntionality
    button.onclick = function () {
        if (dataKey === "northPeak") {
            window.location.href = "north_peak.html";
        } else if (dataKey === "greenlandCabin") {
            window.location.href = "greenland.html";
        } else if (dataKey === "highlandEcofarm") {
            window.location.href = "highland.html";
        } else if (dataKey === "woolooResort") {
            window.location.href = "wooloo.html";
        }
    };

    //Update gradient
    const gradientDiv = document.querySelector(".gradient-overlay");
    if (gradientDiv && data.gradient) {
        gradientDiv.style.background = `linear-gradient(to right, ${data.gradient.from}, ${data.gradient.via}, ${data.gradient.to})`;
    }
}

// Add click event listeners to carousel items
items.forEach((item) => {
    item.addEventListener("click", function () {
        const dataKey = item.id; // Assuming IDs match keys in contentData
        changeContent(dataKey);
    });
});


const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Event listener to toggle the mobile menu visibility on button click
menuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden'); // Toggle the 'hidden' class
});
