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
    isAutoSlideEnabled = true;
    slideInterval = setInterval(autoSlide, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
    isAutoSlideEnabled = false;
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Progress Bar and Scroll to Top Button
window.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progress-bar');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    // Initialize slider - ensure slides exist
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        showSlide(0);
        // Start auto-slide after a short delay to ensure page is fully loaded
        setTimeout(() => {
            startAutoSlide();
        }, 1000);
    }
    
    // Pause slider on hover
    const sliderContainer = document.querySelector('.hero-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            stopAutoSlide();
        });
        sliderContainer.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
    
    // Also pause when user interacts with navigation
    const sliderNavs = document.querySelectorAll('.slider-nav');
    sliderNavs.forEach(nav => {
        nav.addEventListener('click', () => {
            resetAutoSlide();
        });
    });
    
    const sliderDots = document.querySelectorAll('.dot');
    sliderDots.forEach(dot => {
        dot.addEventListener('click', () => {
            resetAutoSlide();
        });
    });
    
    // Update progress bar and show/hide scroll to top button
    function updateScrollProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollableHeight = documentHeight - windowHeight;
        const scrollProgress = (scrollTop / scrollableHeight) * 100;
        
        if (progressBar) {
            progressBar.style.width = scrollProgress + '%';
        }
        
        // Show/hide scroll to top button
        if (scrollToTopBtn) {
            if (scrollTop > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateScrollProgress);
    
    // Update on page load
    updateScrollProgress();
});


