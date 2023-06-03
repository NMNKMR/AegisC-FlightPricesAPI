const express = require("express");
const app = express();

app.use("/aegisC", require('./routes/flightRoutes'));

app.listen(3000, ()=> {
    console.log("Server started");
})