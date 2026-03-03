// Image Slider Functionality
let currentSlideIndex = 0;
let slideInterval = null;
let isAutoSlideEnabled = true;
const AUTO_SLIDE_DELAY = 5000; // 5 seconds

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

function toggleAutoSlide() {
    isAutoSlideEnabled = !isAutoSlideEnabled;
    if (isAutoSlideEnabled) {
        startAutoSlide();
    } else {
        clearInterval(slideInterval);
    }
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        showSlide(0);
        startAutoSlide();
    }

    // Add event listeners for next/prev buttons if they exist
    const nextButton = document.querySelector('.carousel-control.next');
    if (nextButton) {
        nextButton.addEventListener('click', () => changeSlide(1));
    }

    const prevButton = document.querySelector('.carousel-control.prev');
    if (prevButton) {
        prevButton.addEventListener('click', () => changeSlide(-1));
    }

    // Add event listeners for dot navigation if they exist
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide(index + 1);
            if (isAutoSlideEnabled) {
                resetAutoSlide();
            }
        });
    });

    // Optional: Add event listener to toggle auto slide (e.g., on hover or a button click)
    // const sliderContainer = document.querySelector('.hero-slider'); // Assuming a container exists
    // if (sliderContainer) {
    //     sliderContainer.addEventListener('mouseenter', () => {
    //         if (isAutoSlideEnabled) clearInterval(slideInterval);
    //     });
    //     sliderContainer.addEventListener('mouseleave', () => {
    //         if (isAutoSlideEnabled) startAutoSlide();
    //     });
    // }
});
