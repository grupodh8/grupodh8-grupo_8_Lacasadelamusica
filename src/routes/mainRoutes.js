// Requires
const express = require('express');
const router = express.Router();

// Controller require
const mainController = require('../controllers/mainController');

//Middleware
const authMiddleware = require('../middlewares/authMiddleware');

// Index route
router.get('/', mainController.index);

// Shopping cart route
router.get('/cart', mainController.cart);


// Exports
module.exports = router;