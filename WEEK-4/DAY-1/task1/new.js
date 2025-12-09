const ctaButton = document.querySelector(".cta-button");
ctaButton.addEventListener("click", function () {
  alert("Welcome to my website");
});

// carousel dots
// responsive changes
// closing the hamburger menu
// opening menu
// smooth navigation

// navbar
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// card slide

const cardsContainer = document.getElementById("cardsContainer");
const scrollLeft = document.getElementById("scrollLeft");
const scrollRight = document.getElementById("scrollRight");

scrollLeft.addEventListener("click", function () {
    cardsContainer.scrollBy({
        left: -320, 
        behavior: "smooth" 
    });
});
scrollRight.addEventListener("click", function () {
    cardsContainer.scrollBy({
        left: 320, 
        behavior: "smooth" 
    });
});


// carousel functionality
// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const dotsContainer = document.getElementById('carouselDots');

// Create dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', function() {
        goToSlide(i);
    });
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlides();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);