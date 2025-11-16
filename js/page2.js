// Store user data
let userData = {};

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
            setTimeout(() => {
                window.location.href = 'page3.html';
            }, 300);
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

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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
                // Store in localStorage for use across pages
                localStorage.setItem('userData', JSON.stringify(userData));
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
    
    // Progress Bar and Scroll to Top Button
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
});


