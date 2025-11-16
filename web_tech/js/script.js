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

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
    
    // Update progress bar after page change
    setTimeout(() => {
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = '0%';
        }
        const scrollToTopBtn = document.getElementById('scroll-to-top');
        if (scrollToTopBtn) {
            scrollToTopBtn.classList.remove('show');
        }
    }, 100);
}

// Scroll to destination
function scrollToDestination(destId) {
    const element = document.getElementById(destId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Form Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
}

function validatePincode(pincode) {
    return /^\d{6}$/.test(pincode);
}

function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.add('input-error');
    input.classList.remove('input-success');
    error.textContent = message;
    error.classList.add('show');
}

function showSuccess(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.remove('input-error');
    input.classList.add('input-success');
    error.classList.remove('show');
}

// Registration Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const pincode = document.getElementById('pincode').value.trim();

            let isValid = true;

            // Validate name
            if (name === '') {
                showError('name', 'name-error', 'Name is required');
                isValid = false;
            } else {
                showSuccess('name', 'name-error');
            }

            // Validate email
            if (email === '') {
                showError('email', 'email-error', 'Email is required');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('email', 'email-error', 'Please enter a valid email address');
                isValid = false;
            } else {
                showSuccess('email', 'email-error');
            }

            // Validate phone
            if (phone === '') {
                showError('phone', 'phone-error', 'Phone number is required');
                isValid = false;
            } else if (!validatePhone(phone)) {
                showError('phone', 'phone-error', 'Phone number must be exactly 10 digits');
                isValid = false;
            } else {
                showSuccess('phone', 'phone-error');
            }

            // Validate pincode
            if (pincode === '') {
                showError('pincode', 'pincode-error', 'PIN code is required');
                isValid = false;
            } else if (!validatePincode(pincode)) {
                showError('pincode', 'pincode-error', 'PIN code must be exactly 6 digits');
                isValid = false;
            } else {
                showSuccess('pincode', 'pincode-error');
            }

            if (isValid) {
                userData = { name, email, phone, pincode };
                showModal('success-modal');
            }
        });

        // Real-time validation
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                const email = this.value.trim();
                if (email && !validateEmail(email)) {
                    showError('email', 'email-error', 'Please enter a valid email address');
                } else if (email) {
                    showSuccess('email', 'email-error');
                }
            });
        }

        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                this.value = this.value.replace(/\D/g, '');
                if (this.value.length > 10) {
                    this.value = this.value.slice(0, 10);
                }
            });

            phoneInput.addEventListener('blur', function() {
                const phone = this.value.trim();
                if (phone && !validatePhone(phone)) {
                    showError('phone', 'phone-error', 'Phone number must be exactly 10 digits');
                } else if (phone) {
                    showSuccess('phone', 'phone-error');
                }
            });
        }

        const pincodeInput = document.getElementById('pincode');
        if (pincodeInput) {
            pincodeInput.addEventListener('input', function() {
                this.value = this.value.replace(/\D/g, '');
                if (this.value.length > 6) {
                    this.value = this.value.slice(0, 6);
                }
            });

            pincodeInput.addEventListener('blur', function() {
                const pincode = this.value.trim();
                if (pincode && !validatePincode(pincode)) {
                    showError('pincode', 'pincode-error', 'PIN code must be exactly 6 digits');
                } else if (pincode) {
                    showSuccess('pincode', 'pincode-error');
                }
            });
        }
    }
});

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
        if (modalId === 'success-modal') {
            setTimeout(() => showPage('blog-page'), 300);
        }
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
    // Update summary
    const summaryName = document.getElementById('summary-name');
    const summaryEmail = document.getElementById('summary-email');
    const summaryTotal = document.getElementById('summary-total');
    const totalElement = document.getElementById('total-price');
    
    if (summaryName) summaryName.textContent = userData.name || 'Guest';
    if (summaryEmail) summaryEmail.textContent = userData.email || '-';
    if (summaryTotal && totalElement) summaryTotal.textContent = totalElement.textContent;
    
    setTimeout(() => {
        showPage('confirmation-page');
    }, 300);
}

function restartJourney() {
    // Reset form
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.reset();
    }
    
    // Reset checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    
    // Reset total
    const totalElement = document.getElementById('total-price');
    if (totalElement) {
        totalElement.textContent = '$0';
    }
    
    // Clear user data
    userData = {};
    
    // Go to home
    showPage('home-page');
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

