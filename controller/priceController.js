const {genFlights} = require('./flightGenerator');

const flightPrice = (req, res)=> {
    const promise = new Promise((resolve, reject)=> {
        const flightData = {
            source: req.query.src || "",
            destination: req.query.dest || "",
            date: req.query.date || ""
        }
        
        if(flightData.source===""||flightData.destination===""||flightData.date==="") reject("One of the required field is empty");

        const flights = genFlights();
        const output = {
            flightData: flightData,
            flightPrices: flights
        }

        resolve(output);
    })

    promise
    .then((output)=>res.status(200).json(output))
    .catch((err)=>res.status(500).json({"error":err}))
}

module.exports = {flightPrice};