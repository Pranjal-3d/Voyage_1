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
        'economy': 60000,
        'business': 180000,
        'first': 360000,
        'basic': 24000,
        'standard': 48000,
        'premium': 96000,
        'sightseeing': 18000,
        'adventure': 36000,
        'spa': 30000,
        'cruise': 42000
    }
};