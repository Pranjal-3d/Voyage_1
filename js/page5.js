// Page 5 - Confirmation/Thank You Page
// Load booking data and display confirmation

window.addEventListener('DOMContentLoaded', function() {
    // Load user data
    const storedData = localStorage.getItem('userData');
    let userData = {};
    if (storedData) {
        try {
            userData = JSON.parse(storedData);
        } catch (e) {
            console.error('Error parsing user data:', e);
        }
    }
    
    // Load booking details
    const bookingDetailsData = localStorage.getItem('bookingDetails');
    let bookingDetails = {};
    if (bookingDetailsData) {
        try {
            bookingDetails = JSON.parse(bookingDetailsData);
        } catch (e) {
            console.error('Error parsing booking details:', e);
        }
    }
    
    // Load destination data
    const selectedDestData = localStorage.getItem('selectedDestination');
    let destination = { name: 'Not Selected' };
    if (selectedDestData) {
        try {
            destination = JSON.parse(selectedDestData);
        } catch (e) {
            console.error('Error parsing destination data:', e);
        }
    }
    
    // Get total price
    const totalPrice = localStorage.getItem('totalPrice') || '₹0';
    
    // Update summary elements
    const summaryName = document.getElementById('summary-name');
    const summaryEmail = document.getElementById('summary-email');
    const summaryDestination = document.getElementById('summary-destination');
    const summaryTotal = document.getElementById('summary-total');
    
    if (summaryName) {
        summaryName.textContent = userData.name || 'Guest';
    }
    
    if (summaryEmail) {
        summaryEmail.textContent = userData.email || '-';
    }
    
    if (summaryDestination) {
        summaryDestination.textContent = destination.name || 'Not Selected';
    }
    
    if (summaryTotal) {
        summaryTotal.textContent = totalPrice;
    }
    
    // Progress bar animation
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = '100%';
    }
});

function restartJourney() {
    // Clear localStorage
    localStorage.removeItem('userData');
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('selectedDestination');
    localStorage.removeItem('bookingDetails');
    
    // Redirect to home page
    window.location.href = 'page1.html';
}

