// Requires
const express = require('express');
const router = express.Router();

// Require de controllers
const mainController = require('../controllers/mainController');

// Rutas

router.get('/', mainController.index);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

// CARRITO DE COMPRAS

router.get('/cart', mainController.cart);


// Exportacion de modulo

module.exports = router;