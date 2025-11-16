// Destination-specific price mapping (in Rupees)
const destinationPrices = {
    'paris': {
        'economy': 45000,
        'business': 135000,
        'first': 270000,
        'basic': 18000,
        'standard': 36000,
        'premium': 72000,
        'sightseeing': 13500,
        'adventure': 27000,
        'spa': 22500,
        'cruise': 31500
    },
    'tokyo': {
        'economy': 50000,
        'business': 150000,
        'first': 300000,
        'basic': 20000,
        'standard': 40000,
        'premium': 80000,
        'sightseeing': 15000,
        'adventure': 30000,
        'spa': 25000,
        'cruise': 35000
    },
    'rome': {
        'economy': 42000,
        'business': 126000,
        'first': 252000,
        'basic': 16800,
        'standard': 33600,
        'premium': 67200,
        'sightseeing': 12600,
        'adventure': 25200,
        'spa': 21000,
        'cruise': 29400
    },
    'bali': {
        'economy': 35000,
        'business': 105000,
        'first': 210000,
        'basic': 14000,
        'standard': 28000,
        'premium': 56000,
        'sightseeing': 10500,
        'adventure': 21000,
        'spa': 17500,
        'cruise': 24500
    },
    'dubai': {
        'economy': 48000,
        'business': 144000,
        'first': 288000,
        'basic': 19200,
        'standard': 38400,
        'premium': 76800,
        'sightseeing': 14400,
        'adventure': 28800,
        'spa': 24000,
        'cruise': 33600
    },
    'newyork': {
        'economy': 55000,
        'business': 165000,
        'first': 330000,
        'basic': 22000,
        'standard': 44000,
        'premium': 88000,
        'sightseeing': 16500,
        'adventure': 33000,
        'spa': 27500,
        'cruise': 38500
    },
    'london': {
        'economy': 52000,
        'business': 156000,
        'first': 312000,
        'basic': 20800,
        'standard': 41600,
        'premium': 83200,
        'sightseeing': 15600,
        'adventure': 31200,
        'spa': 26000,
        'cruise': 36400
    },
    'sydney': {
        'economy': 46000,
        'business': 138000,
        'first': 276000,
        'basic': 18400,
        'standard': 36800,
        'premium': 73600,
        'sightseeing': 13800,
        'adventure': 27600,
        'spa': 23000,
        'cruise': 32200
    }
};

// Default prices (if no destination selected)
const defaultPrices = {
    'economy': 45000,
    'business': 135000,
    'first': 270000,
    'basic': 18000,
    'standard': 36000,
    'premium': 72000,
    'sightseeing': 13500,
    'adventure': 27000,
    'spa': 22500,
    'cruise': 31500
};

// Store user data
let userData = {};

// Country-specific trip plans
const countryPlans = {
    'paris': [
        { name: 'Romantic Paris Getaway', duration: '5 Days', highlights: 'Eiffel Tower, Louvre, Seine Cruise, Montmartre', price: '₹1,00,000' },
        { name: 'Cultural Explorer', duration: '7 Days', highlights: 'Museums, Art Galleries, Historical Sites', price: '₹1,50,000' },
        { name: 'Gourmet Experience', duration: '4 Days', highlights: 'Food Tours, Wine Tasting, Michelin Restaurants', price: '₹1,25,000' }
    ],
    'tokyo': [
        { name: 'Traditional & Modern', duration: '6 Days', highlights: 'Temples, Shibuya, Sushi Making, Onsen', price: '₹1,16,000' },
        { name: 'Tech & Culture', duration: '5 Days', highlights: 'Akihabara, Traditional Gardens, Robot Restaurant', price: '₹1,08,000' },
        { name: 'Foodie Adventure', duration: '4 Days', highlights: 'Tsukiji Market, Ramen Tours, Kaiseki Dining', price: '₹1,00,000' }
    ],
    'rome': [
        { name: 'Ancient History Tour', duration: '5 Days', highlights: 'Colosseum, Vatican, Forum, Catacombs', price: '₹1,08,000' },
        { name: 'Art & Architecture', duration: '6 Days', highlights: 'Vatican Museums, Sistine Chapel, Pantheon', price: '₹1,33,000' },
        { name: 'Culinary Journey', duration: '4 Days', highlights: 'Cooking Classes, Wine Tours, Local Markets', price: '₹91,000' }
    ],
    'bali': [
        { name: 'Beach Paradise', duration: '7 Days', highlights: 'Beaches, Water Sports, Sunset Views', price: '₹75,000' },
        { name: 'Wellness Retreat', duration: '5 Days', highlights: 'Spa, Yoga, Meditation, Rice Terraces', price: '₹83,000' },
        { name: 'Cultural Immersion', duration: '6 Days', highlights: 'Temples, Traditional Dance, Local Villages', price: '₹91,000' }
    ],
    'dubai': [
        { name: 'Luxury Experience', duration: '5 Days', highlights: 'Burj Khalifa, Palm Jumeirah, Desert Safari', price: '₹1,50,000' },
        { name: 'Shopping & Adventure', duration: '4 Days', highlights: 'Dubai Mall, Skydiving, Aquarium', price: '₹1,25,000' },
        { name: 'Family Fun', duration: '6 Days', highlights: 'Theme Parks, Water Parks, Beach Activities', price: '₹1,66,000' }
    ],
    'newyork': [
        { name: 'City Explorer', duration: '5 Days', highlights: 'Times Square, Statue of Liberty, Broadway', price: '₹1,33,000' },
        { name: 'Arts & Culture', duration: '6 Days', highlights: 'Museums, Galleries, Central Park, Shows', price: '₹1,50,000' },
        { name: 'Food & Nightlife', duration: '4 Days', highlights: 'Food Tours, Rooftop Bars, Jazz Clubs', price: '₹1,16,000' }
    ],
    'london': [
        { name: 'Royal London', duration: '5 Days', highlights: 'Buckingham Palace, Tower of London, Westminster', price: '₹1,25,000' },
        { name: 'Museum & Theater', duration: '6 Days', highlights: 'British Museum, West End Shows, Tate Modern', price: '₹1,41,000' },
        { name: 'Historic Journey', duration: '4 Days', highlights: 'Historical Sites, Afternoon Tea, Pubs', price: '₹1,08,000' }
    ],
    'sydney': [
        { name: 'Harbor Highlights', duration: '5 Days', highlights: 'Opera House, Harbour Bridge, Beaches', price: '₹1,00,000' },
        { name: 'Coastal Adventure', duration: '6 Days', highlights: 'Bondi Beach, Coastal Walks, Water Sports', price: '₹1,16,000' },
        { name: 'City & Nature', duration: '7 Days', highlights: 'Blue Mountains, Wildlife, Harbor Cruises', price: '₹1,33,000' }
    ]
};

// Load country-specific plans
function loadCountryPlans(destinationId, destinationName) {
    const plansContainer = document.getElementById('country-specific-plans');
    const destinationNameDisplay = document.getElementById('destination-name-display');
    const selectedDestinationName = document.getElementById('selected-destination-name');
    
    if (destinationNameDisplay) {
        destinationNameDisplay.textContent = destinationName;
    }
    
    if (selectedDestinationName) {
        selectedDestinationName.textContent = destinationName;
    }
    
    if (plansContainer && countryPlans[destinationId]) {
        plansContainer.innerHTML = '';
        
        countryPlans[destinationId].forEach((plan, index) => {
            const planCard = document.createElement('div');
            planCard.className = 'plan-card-modern bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all shadow-lg hover:shadow-xl';
            planCard.innerHTML = `
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                        ${index + 1}
                    </div>
                    <div>
                        <h4 class="text-xl font-bold text-slate-800">${plan.name}</h4>
                        <p class="text-slate-600 text-sm">${plan.duration}</p>
                    </div>
                </div>
                <p class="text-slate-600 mb-4 text-sm leading-relaxed">
                    <i class="fas fa-star mr-2 text-amber-400"></i>
                    ${plan.highlights}
                </p>
                <div class="flex justify-between items-center pt-4 border-t border-slate-200">
                    <span class="text-2xl font-bold text-blue-600">${plan.price}</span>
                    <button class="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow-md hover:shadow-lg">
                        View Details
                    </button>
                </div>
            `;
            plansContainer.appendChild(planCard);
        });
    } else if (plansContainer) {
        plansContainer.innerHTML = '<p class="text-slate-600 text-center col-span-3 py-8"><i class="fas fa-info-circle mr-2 text-blue-500"></i>Please select a destination from the previous page to see recommended plans.</p>';
    }
}

// Get current prices based on selected destination
function getCurrentPrices() {
    const selectedDestData = localStorage.getItem('selectedDestination');
    if (selectedDestData) {
        try {
            const destData = JSON.parse(selectedDestData);
            const normalizedId = destData.id ? destData.id.toLowerCase() : null;
            return (normalizedId && destinationPrices[normalizedId]) ? destinationPrices[normalizedId] : defaultPrices;
        } catch (e) {
            console.error('Error parsing destination data:', e);
            return defaultPrices;
        }
    }
    // Fallback: try individual keys
    const destId = localStorage.getItem('selectedDestinationId');
    if (destId) {
        const normalizedId = destId.toLowerCase();
        return destinationPrices[normalizedId] || defaultPrices;
    }
    return defaultPrices;
}

// Update prices in the UI based on selected destination
function updatePricesForDestination(destinationId) {
    // Normalize destination ID to lowercase
    const normalizedId = destinationId ? destinationId.toLowerCase() : null;
    
    // Get prices for the destination or use defaults
    const prices = normalizedId && destinationPrices[normalizedId] ? destinationPrices[normalizedId] : defaultPrices;
    
    console.log('Updating prices for destination:', normalizedId || 'default', prices);
    
    // Update travel options using IDs
    const economyPrice = document.getElementById('price-economy');
    const businessPrice = document.getElementById('price-business');
    const firstPrice = document.getElementById('price-first');
    
    if (economyPrice) economyPrice.textContent = '₹' + prices.economy.toLocaleString('en-IN');
    if (businessPrice) businessPrice.textContent = '₹' + prices.business.toLocaleString('en-IN');
    if (firstPrice) firstPrice.textContent = '₹' + prices.first.toLocaleString('en-IN');
    
    // Update food packages using IDs
    const basicPrice = document.getElementById('price-basic');
    const standardPrice = document.getElementById('price-standard');
    const premiumPrice = document.getElementById('price-premium');
    
    if (basicPrice) basicPrice.textContent = '₹' + prices.basic.toLocaleString('en-IN');
    if (standardPrice) standardPrice.textContent = '₹' + prices.standard.toLocaleString('en-IN');
    if (premiumPrice) premiumPrice.textContent = '₹' + prices.premium.toLocaleString('en-IN');
    
    // Update activities using IDs
    const sightseeingPrice = document.getElementById('price-sightseeing');
    const adventurePrice = document.getElementById('price-adventure');
    const spaPrice = document.getElementById('price-spa');
    const cruisePrice = document.getElementById('price-cruise');
    
    if (sightseeingPrice) sightseeingPrice.textContent = '₹' + prices.sightseeing.toLocaleString('en-IN');
    if (adventurePrice) adventurePrice.textContent = '₹' + prices.adventure.toLocaleString('en-IN');
    if (spaPrice) spaPrice.textContent = '₹' + prices.spa.toLocaleString('en-IN');
    if (cruisePrice) cruisePrice.textContent = '₹' + prices.cruise.toLocaleString('en-IN');
    
    // Reset total price
    const totalElement = document.getElementById('total-price');
    if (totalElement) {
        totalElement.textContent = '₹0';
    }
    
    console.log('✓ Prices updated successfully for:', normalizedId || 'default');
}

// Calculate Total Price
function calculateTotal() {
    let total = 0;
    const prices = getCurrentPrices();
    const breakdown = [];
    
    // Get travelers count
    const adults = parseInt(document.getElementById('adults-count')?.value || 1);
    const children = parseInt(document.getElementById('children-count')?.value || 0);
    const totalTravelers = adults + children;
    
    // Travel class (radio button - only one can be selected)
    const travelClass = document.querySelector('input[name="travel"]:checked');
    if (travelClass && prices[travelClass.value]) {
        const travelPrice = prices[travelClass.value] * adults + (prices[travelClass.value] * 0.7 * children);
        total += travelPrice;
        breakdown.push({ label: `${travelClass.value.charAt(0).toUpperCase() + travelClass.value.slice(1)} Class (${adults} adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''})`, amount: travelPrice });
    }
    
    // Food packages (checkboxes)
    document.querySelectorAll('input[name="food"]:checked').forEach(checkbox => {
        if (prices[checkbox.value]) {
            const foodPrice = prices[checkbox.value] * totalTravelers;
            total += foodPrice;
            breakdown.push({ label: `${checkbox.value.charAt(0).toUpperCase() + checkbox.value.slice(1)} Dining`, amount: foodPrice });
        }
    });
    
    // Activities (checkboxes)
    document.querySelectorAll('input[name="activity"]:checked').forEach(checkbox => {
        if (prices[checkbox.value]) {
            const activityPrice = prices[checkbox.value] * totalTravelers;
            total += activityPrice;
            breakdown.push({ label: `${checkbox.value.charAt(0).toUpperCase() + checkbox.value.slice(1)} Activity`, amount: activityPrice });
        }
    });
    
    // Additional services (checkboxes)
    const servicePrices = { 'insurance': 9000, 'visa': 15000, 'transfer': 6000 };
    document.querySelectorAll('input[name="service"]:checked').forEach(checkbox => {
        const servicePrice = servicePrices[checkbox.value] || 0;
        if (servicePrice > 0) {
            total += servicePrice;
            breakdown.push({ label: `${checkbox.value.charAt(0).toUpperCase() + checkbox.value.slice(1)} Service`, amount: servicePrice });
        }
    });

    // Update total price display
    const totalElement = document.getElementById('total-price');
    if (totalElement) {
        totalElement.textContent = '₹' + total.toLocaleString('en-IN');
        
        // Animate price change
        totalElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            totalElement.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Update price breakdown
    updatePriceBreakdown(breakdown, total);
    
    // Update selected options list
    updateSelectedOptionsList();
}

function updatePriceBreakdown(breakdown, total) {
    const breakdownContainer = document.getElementById('price-breakdown');
    if (!breakdownContainer) return;
    
    if (breakdown.length === 0) {
        breakdownContainer.innerHTML = '<p class="text-slate-500 text-sm text-center py-2">No items selected</p>';
        return;
    }
    
    let html = '';
    breakdown.forEach(item => {
        html += `
            <div class="price-breakdown-item">
                <span>${item.label}</span>
                <span>₹${item.amount.toLocaleString('en-IN')}</span>
            </div>
        `;
    });
    
    html += `
        <div class="price-breakdown-item total">
            <span>Total</span>
            <span>₹${total.toLocaleString('en-IN')}</span>
        </div>
    `;
    
    breakdownContainer.innerHTML = html;
}

function updateSelectedOptionsList() {
    const listContainer = document.getElementById('selected-options-list');
    if (!listContainer) return;
    
    const options = [];
    
    // Travel class
    const travelClass = document.querySelector('input[name="travel"]:checked');
    if (travelClass) {
        options.push({ name: travelClass.value.charAt(0).toUpperCase() + travelClass.value.slice(1) + ' Class', type: 'Travel' });
    }
    
    // Food
    document.querySelectorAll('input[name="food"]:checked').forEach(checkbox => {
        options.push({ name: checkbox.value.charAt(0).toUpperCase() + checkbox.value.slice(1) + ' Dining', type: 'Food' });
    });
    
    // Activities
    document.querySelectorAll('input[name="activity"]:checked').forEach(checkbox => {
        options.push({ name: checkbox.value.charAt(0).toUpperCase() + checkbox.value.slice(1), type: 'Activity' });
    });
    
    // Services
    document.querySelectorAll('input[name="service"]:checked').forEach(checkbox => {
        options.push({ name: checkbox.value.charAt(0).toUpperCase() + checkbox.value.slice(1), type: 'Service' });
    });
    
    if (options.length === 0) {
        listContainer.innerHTML = '<p class="text-slate-500 text-sm text-center py-4">No options selected yet</p>';
        return;
    }
    
    let html = '';
    options.forEach(option => {
        html += `
            <div class="selected-option-item">
                <span><strong>${option.type}:</strong> ${option.name}</span>
            </div>
        `;
    });
    
    listContainer.innerHTML = html;
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
    const totalPrice = totalElement ? totalElement.textContent : '₹0';
    
    // Store booking details
    const bookingDetails = {
        totalPrice: totalPrice,
        departureDate: document.getElementById('departure-date')?.value || '',
        returnDate: document.getElementById('return-date')?.value || '',
        adults: document.getElementById('adults-count')?.value || 1,
        children: document.getElementById('children-count')?.value || 0,
        selectedOptions: getSelectedOptions()
    };
    
    localStorage.setItem('totalPrice', totalPrice);
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    
    // Redirect to confirmation page
    window.location.href = 'page5.html';
}

function getSelectedOptions() {
    const options = [];
    
    // Travel class
    const travelClass = document.querySelector('input[name="travel"]:checked');
    if (travelClass) {
        options.push({ type: 'Travel Class', name: travelClass.value, price: getPriceForOption('travel', travelClass.value) });
    }
    
    // Food options
    document.querySelectorAll('input[name="food"]:checked').forEach(checkbox => {
        options.push({ type: 'Dining', name: checkbox.value, price: getPriceForOption('food', checkbox.value) });
    });
    
    // Activities
    document.querySelectorAll('input[name="activity"]:checked').forEach(checkbox => {
        options.push({ type: 'Activity', name: checkbox.value, price: getPriceForOption('activity', checkbox.value) });
    });
    
    // Services
    document.querySelectorAll('input[name="service"]:checked').forEach(checkbox => {
        options.push({ type: 'Service', name: checkbox.value, price: getPriceForOption('service', checkbox.value) });
    });
    
    return options;
}

function getPriceForOption(type, value) {
    const prices = {
        'travel': { 'economy': 45000, 'business': 135000, 'first': 270000 },
        'food': { 'basic': 18000, 'standard': 36000, 'premium': 72000 },
        'activity': { 'sightseeing': 13500, 'adventure': 27000, 'spa': 22500, 'cruise': 31500 },
        'service': { 'insurance': 9000, 'visa': 15000, 'transfer': 6000 }
    };
    return prices[type]?.[value] || 0;
}

function adjustTravelers(type, change) {
    const input = document.getElementById(`${type}-count`);
    if (input) {
        let value = parseInt(input.value) + change;
        const max = 10;
        const min = type === 'children' ? 0 : 1;
        value = Math.max(min, Math.min(max, value));
        input.value = value;
        calculateTotal();
    }
}

function restartJourney() {
    // Clear localStorage
    localStorage.removeItem('userData');
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('selectedDestination');
    
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
    
    // Set minimum dates for date inputs
    const today = new Date().toISOString().split('T')[0];
    const departureInput = document.getElementById('departure-date');
    const returnInput = document.getElementById('return-date');
    
    if (departureInput) {
        departureInput.setAttribute('min', today);
        departureInput.addEventListener('change', function() {
            if (returnInput && this.value) {
                const departureDate = new Date(this.value);
                departureDate.setDate(departureDate.getDate() + 1);
                returnInput.setAttribute('min', departureDate.toISOString().split('T')[0]);
            }
            calculateTotal();
        });
    }
    
    if (returnInput) {
        returnInput.setAttribute('min', today);
    }
    
    // Initialize calculateTotal on page load
    calculateTotal();
    
    // Load selected destination and country-specific plans
    function loadSelectedDestination() {
        try {
            // Try multiple methods to get destination data
            let destData = null;
            let selectedDestData = localStorage.getItem('selectedDestination');
            
            // Fallback: try individual keys
            if (!selectedDestData) {
                const destId = localStorage.getItem('selectedDestinationId');
                const destName = localStorage.getItem('selectedDestinationName');
                if (destId && destName) {
                    destData = { id: destId, name: destName };
                    console.log('Loaded destination from individual keys:', destData);
                }
            } else {
                destData = JSON.parse(selectedDestData);
                console.log('Loaded destination from JSON:', destData);
            }
            
            console.log('Loading destination from localStorage:', selectedDestData || destData);
            
            if (destData && destData.id && destData.name) {
                // Normalize destination ID to lowercase
                destData.id = destData.id.toLowerCase();
                
                console.log('Parsed destination data:', destData);
                console.log('Available destinations in price map:', Object.keys(destinationPrices));
                
                // Update destination name displays FIRST
                const destinationNameDisplay = document.getElementById('destination-name-display');
                const selectedDestinationName = document.getElementById('selected-destination-name');
                
                if (destinationNameDisplay) {
                    destinationNameDisplay.textContent = destData.name;
                    console.log('Updated destination-name-display:', destData.name);
                }
                if (selectedDestinationName) {
                    selectedDestinationName.textContent = destData.name;
                    console.log('Updated selected-destination-name:', destData.name);
                }
                
                // Load country-specific plans
                loadCountryPlans(destData.id, destData.name);
                
                // Update prices for the selected destination
                console.log('Updating prices for destination ID:', destData.id);
                updatePricesForDestination(destData.id);
                
                console.log('✓ Destination loaded successfully:', destData.name, 'with ID:', destData.id);
                return true;
            } else {
                console.warn('No valid destination found in localStorage');
                // If no destination selected, show message and use default prices
                const plansContainer = document.getElementById('country-specific-plans');
                const destinationNameDisplay = document.getElementById('destination-name-display');
                const selectedDestinationName = document.getElementById('selected-destination-name');
                
                if (plansContainer) {
                    plansContainer.innerHTML = '<p class="text-white text-center col-span-2 py-8"><i class="fas fa-info-circle mr-2"></i>Please go back and select a destination to see recommended plans.</p>';
                }
                if (destinationNameDisplay) {
                    destinationNameDisplay.textContent = 'Your Destination';
                }
                if (selectedDestinationName) {
                    selectedDestinationName.textContent = 'Select a Destination';
                }
                updatePricesForDestination(null); // Use default prices
                return false;
            }
        } catch (e) {
            console.error('Error loading destination:', e);
            console.error('Error stack:', e.stack);
            // If error, show message and use default prices
            const plansContainer = document.getElementById('country-specific-plans');
            if (plansContainer) {
                plansContainer.innerHTML = '<p class="text-white text-center col-span-2 py-8"><i class="fas fa-info-circle mr-2"></i>Error loading destination. Please go back and select a destination.</p>';
            }
            updatePricesForDestination(null); // Use default prices
            return false;
        }
    }
    
    // Load destination immediately when page loads
    loadSelectedDestination();
    
    // Also try loading after short delays to ensure DOM is ready and localStorage is accessible
    setTimeout(() => {
        console.log('Retrying destination load after 100ms...');
        loadSelectedDestination();
    }, 100);
    
    setTimeout(() => {
        console.log('Retrying destination load after 500ms...');
        loadSelectedDestination();
    }, 500);
    
    // Also listen for storage events in case destination is set after page load
    window.addEventListener('storage', function(e) {
        if (e.key === 'selectedDestination') {
            console.log('Storage event detected - reloading destination...');
            loadSelectedDestination();
        }
    });
    
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
            
            // Add destination to summary
            const selectedDestData = localStorage.getItem('selectedDestination');
            if (selectedDestData) {
                try {
                    const destData = JSON.parse(selectedDestData);
                    const summaryDest = document.getElementById('summary-destination');
                    if (summaryDest) {
                        summaryDest.textContent = destData.name || '-';
                    }
                } catch (e) {
                    console.error('Error loading destination for summary:', e);
                }
            }
        }
    }
});


