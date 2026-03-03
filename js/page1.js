// Image Slider Functionality
let currentSlideIndex = 0;
let slideInterval = null;
let isAutoSlideEnabled = true;

function showSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Handle index boundaries and update currentSlideIndex
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Reset all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide and dot
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
        // showSlide already handles index wrapping and updating currentSlideIndex
        showSlide(currentSlideIndex + 1);
    }
}

function startAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    if (isAutoSlideEnabled) {
        slideInterval = setInterval(autoSlide, 5000); // Adjust interval as needed (e.g., 5000ms = 5 seconds)
    }
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
    startAutoSlide();

    // Add event listeners for next/prev buttons if they exist
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            changeSlide(1);
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            changeSlide(-1);
        });
    }

    // Add event listeners for dot navigation if dots exist
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide(index + 1);
        });
    });
});
