// Requires
const express = require('express');
const router = express.Router();

// Require de controllers
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');

// Rutas

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/register', (req,res) => {
    res.render('register');
});

router.get('/login', (req,res) => {
    res.render('login');
});


// Exportacion de modulo

module.exports = router;