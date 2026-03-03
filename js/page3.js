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
            throw new Error('Failed to store selected destination in localStorage.');
        }
        
        // Optionally, you could add logic here to navigate or update UI
        // For example: window.location.href = '/some/page';
        
    } catch (error) {
        console.error('Error selecting destination:', error);
        // Depending on requirements, you might want to: 
        // - Show an error message to the user
        // - Return false or throw the error further
        // For now, just logging the error.
    }
}
