// Price mapping
const prices = {
    'economy': 500,
    'business': 1500,
    'first': 3000,
    'basic': 200,
    'standard': 400,
    'premium': 800,
    'sightseeing': 150,
    'adventure': 300,
    'spa': 250,
    'cruise': 350
};

// Store user data
let userData = {};

// Calculate Total Price
function calculateTotal() {
    let total = 0;
    
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        const value = checkbox.value;
        if (prices[value]) {
            total += prices[value];
        }
    });

    const totalElement = document.getElementById('total-price');
    if (totalElement) {
        totalElement.textContent = '$' + total.toLocaleString();
        
        // Animate price change
        totalElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            totalElement.style.transform = 'scale(1)';
        }, 200);
    }
}

// Modal Functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal on outside click
window.addEventListener('click', function(e) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

function showConfirmModal() {
    const totalElement = document.getElementById('total-price');
    const modalTotalElement = document.getElementById('modal-total');
    if (totalElement && modalTotalElement) {
        const total = totalElement.textContent;
        modalTotalElement.textContent = total;
        showModal('confirm-modal');
    }
}

function confirmBooking() {
    closeModal('confirm-modal');
    // Get user data from localStorage
    const storedData = localStorage.getItem('userData');
    if (storedData) {
        userData = JSON.parse(storedData);
    }
    
    // Get total price
    const totalElement = document.getElementById('total-price');
    const totalPrice = totalElement ? totalElement.textContent : '$0';
    
    // Store total price in localStorage
    localStorage.setItem('totalPrice', totalPrice);
    
    // Show confirmation on same page
    const itineraryPage = document.querySelector('.gradient-bg-3');
    const confirmationPage = document.getElementById('confirmation-page');
    
    if (confirmationPage && itineraryPage) {
        itineraryPage.style.display = 'none';
        confirmationPage.style.display = 'flex';
        
        // Update summary
        document.getElementById('summary-name').textContent = userData.name || 'Guest';
        document.getElementById('summary-email').textContent = userData.email || '-';
        document.getElementById('summary-total').textContent = totalPrice;
        
        window.scrollTo(0, 0);
    }
}

function restartJourney() {
    // Clear localStorage
    localStorage.removeItem('userData');
    localStorage.removeItem('totalPrice');
    
    // Go to home
    window.location.href = 'page1.html';
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
    
    function updateScrollProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollableHeight = documentHeight - windowHeight;
        const scrollProgress = (scrollTop / scrollableHeight) * 100;
        
        if (progressBar) {
            progressBar.style.width = scrollProgress + '%';
        }
        
        if (scrollToTopBtn) {
            if (scrollTop > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();
    
    // Show confirmation page if coming from booking
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('confirmed') === 'true') {
        const itineraryPage = document.querySelector('.gradient-bg-3');
        const confirmationPage = document.getElementById('confirmation-page');
        if (itineraryPage && confirmationPage) {
            itineraryPage.style.display = 'none';
            confirmationPage.style.display = 'flex';
            
            // Load user data from localStorage
            const storedData = localStorage.getItem('userData');
            const totalPrice = localStorage.getItem('totalPrice');
            
            if (storedData) {
                const userData = JSON.parse(storedData);
                document.getElementById('summary-name').textContent = userData.name || 'Guest';
                document.getElementById('summary-email').textContent = userData.email || '-';
            }
            
            if (totalPrice) {
                document.getElementById('summary-total').textContent = totalPrice;
            }
        }
    }
});


