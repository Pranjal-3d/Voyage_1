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
        if (modal.classList.contains('active') && !modal.contains(e.target)) {
            closeModal(modal.id);
        }
    });
});