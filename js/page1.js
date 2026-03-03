// Image Slider Functionality
let currentSlideIndex = 0;
let slideInterval = null;
let isAutoSlideEnabled = true;
const AUTO_SLIDE_DELAY = 5000; // Default delay in milliseconds

function showSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Reset all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle index boundaries
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Show current slide
    if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
    }
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
    if (isAutoSlideEnabled) {
        resetAutoSlide();
    }
}

function currentSlide(index) {
    showSlide(index - 1);
    if (isAutoSlideEnabled) {
        resetAutoSlide();
    }
}

function autoSlide() {
    if (isAutoSlideEnabled) {
        const slides = document.querySelectorAll('.hero-slide');
        if (slides.length > 0) {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }
    }
}

function startAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    if (isAutoSlideEnabled) {
        slideInterval = setInterval(autoSlide, AUTO_SLIDE_DELAY);
    }
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    if (isAutoSlideEnabled) {
        slideInterval = setInterval(autoSlide, AUTO_SLIDE_DELAY);
    }
}

// Initial setup: show the first slide and start the auto-slide
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
    startAutoSlide();
});

// Optional: Add event listeners for next/prev buttons and dots if they exist
// Example:
// document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
// document.querySelector('.next').addEventListener('click', () => changeSlide(1));
// document.querySelectorAll('.dot').forEach((dot, index) => {
//     dot.addEventListener('click', () => currentSlide(index + 1));
// });
