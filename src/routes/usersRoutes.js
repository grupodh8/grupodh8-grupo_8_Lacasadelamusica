const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

// Ruta de registro

router.get('/register', usersController.register);

// Procesa el registro

router.post('/register', usersController.store);

// Ruta de login

router.get('/login', usersController.login);

// Ruta de perfil

router.get('/profile/:id', usersController.profile);

module.exports = router;
