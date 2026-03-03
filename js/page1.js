// Image Slider Functionality
let currentSlideIndex = 0;
let slideInterval = null;
let isAutoSlideEnabled = true;

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
        currentSlideIndex = (currentSlideIndex + 1) % document.querySelectorAll('.hero-slide').length;
        showSlide(currentSlideIndex);
    }
}

function startAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    slideInterval = setInterval(autoSlide, 3000);
}