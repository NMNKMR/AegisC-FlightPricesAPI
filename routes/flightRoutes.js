const express = require('express');
const router = express.Router();

const {flightPrice} = require('../controller/priceController');

router.get('/flightPrice', flightPrice);

module.exports = router;