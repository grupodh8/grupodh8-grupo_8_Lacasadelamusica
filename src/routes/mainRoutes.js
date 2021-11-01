// Requires
const express = require('express');
const router = express.Router();

// Controller require
const mainController = require('../controllers/mainController');

// Index route
router.get('/', mainController.index);

// Shopping cart route
router.get('/cart', mainController.cart);


// Exports
module.exports = router;