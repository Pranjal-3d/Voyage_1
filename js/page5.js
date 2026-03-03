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
    const summaryTotal = document.getElementById('summary-total'); // Fixed incomplete call

    // Display loaded data if elements exist
    if (summaryName) {
        summaryName.textContent = userData.name || 'N/A';
    }
    if (summaryEmail) {
        summaryEmail.textContent = userData.email || 'N/A';
    }
    if (summaryDestination) {
        summaryDestination.textContent = destination.name;
    }
    if (summaryTotal) {
        summaryTotal.textContent = totalPrice;
    }

    // Optionally display booking details if you have specific elements for them
    // For example, if you have an element with id 'booking-details-display':
    // const bookingDetailsDisplay = document.getElementById('booking-details-display');
    // if (bookingDetailsDisplay && Object.keys(bookingDetails).length > 0) {
    //     bookingDetailsDisplay.innerHTML = `
    //         <p>Check-in: ${bookingDetails.checkInDate}</p>
    //         <p>Check-out: ${bookingDetails.checkOutDate}</p>
    //         <p>Guests: ${bookingDetails.guests}</p>
    //     `;
    // }
});
