// Requires
const express = require('express');
const router = express.Router();

// Require de controllers
const mainController = require('../controllers/mainController');

// Rutas

router.get('/', mainController.index);

// CARRITO DE COMPRAS

router.get('/cart', mainController.cart);


// Exportacion de modulo

module.exports = router;