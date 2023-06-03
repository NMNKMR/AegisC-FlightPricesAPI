function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  
function generateRandomFlights(numFlights) {
    const flightNames = [
      'Indigo',
      'Air India',
      'SpiceJet',
      'Vistara',
      'GoAir',
      'AirAsia India'
    ];
  
    const shuffledNames = shuffleArray(flightNames);
    const flights = [];
  
    for (let i = 0; i < numFlights; i++) {
      const flightName = shuffledNames[i % shuffledNames.length];
      const price = getRandomPrice();
  
      flights.push({ flightName, price });
    }
  
    return flights;
}
  
function getRandomPrice() {
    const minPrice = 2000; // Minimum price in Indian Rupees
    const maxPrice = 10000; // Maximum price in Indian Rupees
  
    return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
}
  
function genFlights(){
    const numFlights = 5;
    const randomFlights = generateRandomFlights(numFlights);
    const flightPrices = {};

    randomFlights.forEach(flight => {
    flightPrices[`${flight.flightName}`] = `${flight.price} INR`;
    });

    return flightPrices;
}

module.exports = {genFlights};