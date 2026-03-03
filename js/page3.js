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
            throw new Error('Failed to store destination data');
        }
    } catch (error) {
        console.error('Error selecting destination:', error);
    }
}