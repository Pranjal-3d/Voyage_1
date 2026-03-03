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
    const summaryTotal = document.getElementById('summary-total'); // Completed this line

    if (summaryName) {
        summaryName.textContent = userData.name || 'Guest';
    }
    if (summaryEmail) {
        summaryEmail.textContent = userData.email || 'No email provided';
    }
    if (summaryDestination) {
        // Ensure destination.name exists before accessing it
        summaryDestination.textContent = destination.name ? destination.name : 'Not Selected';
    }
    if (summaryTotal) {
        summaryTotal.textContent = totalPrice;
    }

    // Optionally, display booking details if needed
    // For example, if you have an element with id 'booking-info'
    // const bookingInfoElement = document.getElementById('booking-info');
    // if (bookingInfoElement) {
    //     bookingInfoElement.textContent = JSON.stringify(bookingDetails, null, 2);
    // }
});
