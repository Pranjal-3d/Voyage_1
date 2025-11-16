// Scroll to destination
function scrollToDestination(destId) {
    const element = document.getElementById(destId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Select Destination - Keep for backward compatibility with onclick handlers
function selectDestination(destId, destName, event) {
    // Prevent default if event exists
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    try {
        console.log('Selecting destination (function):', destId, destName);
        
        // Validate destination ID
        if (!destId || !destName) {
            throw new Error('Invalid destination ID or name');
        }
        
        // Store selected destination in localStorage
        const destinationData = {
            id: destId.toLowerCase(), // Ensure lowercase for consistency
            name: destName,
            timestamp: new Date().toISOString()
        };
        
        // Store with multiple keys for redundancy
        localStorage.setItem('selectedDestination', JSON.stringify(destinationData));
        localStorage.setItem('selectedDestinationId', destId.toLowerCase());
        localStorage.setItem('selectedDestinationName', destName);
        
        // Verify it was stored
        const stored = localStorage.getItem('selectedDestination');
        console.log('Stored destination:', stored);
        
        if (!stored) {
            throw new Error('Failed to store destination in localStorage');
        }
        
        // Verify the stored data is correct
        const parsedStored = JSON.parse(stored);
        if (parsedStored.id !== destId.toLowerCase() || parsedStored.name !== destName) {
            throw new Error('Destination data mismatch after storage');
        }
        
        // Visual feedback - remove selection from all buttons
        const allButtons = document.querySelectorAll('button[data-destination-id]');
        allButtons.forEach(btn => {
            btn.classList.remove('bg-green-600', 'ring-4', 'ring-green-300', 'ring-opacity-50');
            btn.classList.add('bg-green-500');
            btn.disabled = false;
            // Reset button text
            const btnText = btn.textContent.trim();
            if (btnText.includes('Selected') || btnText.includes('Continue') || btnText.includes('Redirecting')) {
                btn.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Select This Destination';
            }
        });
        
        // Highlight the clicked button
        let clickedButton = document.querySelector('button[data-destination-id="' + destId + '"]');
        
        if (!clickedButton && event && event.target) {
            clickedButton = event.target.closest('button[data-destination-id]');
        }
        
        if (clickedButton) {
            clickedButton.classList.remove('bg-green-500');
            clickedButton.classList.add('bg-green-600', 'ring-4', 'ring-green-300', 'ring-opacity-50');
            clickedButton.innerHTML = '<i class="fas fa-check-circle mr-2"></i>✓ Selected! Redirecting...';
            clickedButton.disabled = true;
        }
        
        // Show success message
        console.log('✓ You have selected ' + destName + '!');
        console.log('Destination ID:', destId.toLowerCase());
        console.log('Redirecting to page4.html in 500ms...');
        
        // Redirect after a short delay to ensure localStorage is saved
        setTimeout(function() {
            console.log('Redirecting to page4.html...');
            window.location.href = 'page4.html';
        }, 500);
        
        // Fallback redirect
        setTimeout(function() {
            if (window.location.pathname.indexOf('page4.html') === -1) {
                console.log('Fallback redirect...');
                window.location.replace('page4.html');
            }
        }, 2000);
        
    } catch (error) {
        console.error('Error selecting destination:', error);
        alert('There was an error selecting the destination. Please try again.\n\nError: ' + error.message);
    }
    
    return false; // Prevent default behavior
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
    
    // Check if a destination was previously selected and highlight it
    const selectedDestData = localStorage.getItem('selectedDestination');
    if (selectedDestData) {
        try {
            const destData = JSON.parse(selectedDestData);
            if (destData && destData.id) {
                // Try data attribute first
                let selectedButton = document.querySelector(`button[data-destination-id="${destData.id}"]`);
                // Fallback to onclick attribute
                if (!selectedButton) {
                    selectedButton = document.querySelector(`button[onclick*="'${destData.id}'"]`);
                }
                if (selectedButton) {
                    selectedButton.classList.remove('bg-green-500');
                    selectedButton.classList.add('bg-green-600', 'ring-4', 'ring-green-300', 'ring-opacity-50');
                    selectedButton.innerHTML = '<i class="fas fa-check-circle mr-2"></i>✓ Selected! Click to Continue';
                }
            }
        } catch (e) {
            console.error('Error loading previous selection:', e);
        }
    }
    
    // Fix: Make decorative elements non-clickable
    const decorativeElements = document.querySelectorAll('.animate-float, [class*="bg-"][class*="rounded-full"][class*="blur"]');
    decorativeElements.forEach(el => {
        el.style.pointerEvents = 'none';
    });
    console.log('✓ Fixed', decorativeElements.length, 'decorative overlays');
    
    // Initialize destination button clicks with proper event listeners
    const destinationNames = {
        'paris': 'Paris',
        'tokyo': 'Tokyo',
        'rome': 'Rome',
        'bali': 'Bali',
        'dubai': 'Dubai',
        'newyork': 'New York',
        'london': 'London',
        'sydney': 'Sydney'
    };
    
    const allDestButtons = document.querySelectorAll('button[data-destination-id]');
    
    allDestButtons.forEach(button => {
        const destId = button.getAttribute('data-destination-id');
        if (destId) {
            // Get destination name from mapping or parent card
            let destName = destinationNames[destId] || destId;
            
            // Try to get from parent card's h3 tag as fallback
            const parentCard = button.closest('.destination-card');
            if (parentCard) {
                const h3Element = parentCard.querySelector('h3');
                if (h3Element) {
                    destName = h3Element.textContent.trim();
                }
            }
            
            // Ensure button is clickable
            button.style.cursor = 'pointer';
            button.style.position = 'relative';
            button.style.zIndex = '10';
            
            // Remove onclick handler to avoid conflicts - we'll use event listeners
            button.removeAttribute('onclick');
            
            // Add click event listener as PRIMARY handler (works for both mouse and keyboard)
            button.addEventListener('click', function(e) {
                // Prevent default and stop propagation
                e.preventDefault();
                e.stopPropagation();
                
                // Check if we're already redirecting
                if (button.disabled || button.textContent.includes('Redirecting')) {
                    return false;
                }
                
                console.log('Button clicked - Event listener (mouse/keyboard):', destId, destName);
                
                // Call the selectDestination function directly
                selectDestination(destId, destName, e);
                
                return false;
            }, true); // Use capture phase to ensure it fires first
            
            // Also handle mousedown for better mouse click detection
            button.addEventListener('mousedown', function(e) {
                // Ensure the button gets focus
                button.focus();
            });
            
            // Handle keyboard (Enter/Space) for accessibility
            button.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!button.disabled && !button.textContent.includes('Redirecting')) {
                        selectDestination(destId, destName, e);
                    }
                }
            });
        }
    });
    
    console.log('✓ Initialized', allDestButtons.length, 'destination buttons with mouse and keyboard support');
});


