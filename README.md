# AegisC-FlightPricesAPI
Internship Assignment to create API to get flight prices based upon source, destination and date.

<h1>How To Use API:</h1>
<h3>aegis-fp-api.vercel.app/aegisC/flightPrice</h3>
<p>query params (after ? mark): src="source city", dest="destination city", date="date of departure"<p>
<h3>Ex: aegis-fp-api.vercel.app/aegisC/flightPrice?src=delhi&dest=jaipur&date=15%May%2023</h3>
Example Output : {
    "flightData": {
        "source": "Mumbai",
        "destination": "Jaipur",
        "date": "15 May 2023"
    },
    "flightPrices": {
        "Vistara": "9885 INR",
        "GoAir": "8693 INR",
        "Air India": "8138 INR",
        "Indigo": "7745 INR",
        "AirAsia India": "8310 INR"
    }
}

<h3>Note: Here I have generated sample flight prices, though we can use APIs like Skyscanner etc. to get real flight data.</h3>
