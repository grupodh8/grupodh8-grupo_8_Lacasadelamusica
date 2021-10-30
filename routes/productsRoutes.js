// Requires
const express = require('express');
const router = express.Router();

// Require de controllers
const productsController = require('../controllers/productsController');


router.get('/detail/:id', productsController.detail);

router.get('/cart', productsController.cart);

module.exports = router;