const express = require('express');
const router = express.Router();
const { body, check, validationResult } = require('express-validator');

const usersController = require('../controllers/usersController');

const validations = [
    body('first_name').notEmpty().bail()
]

// Ruta de registro

router.get('/register', usersController.register);

// Procesa el registro

router.post('/register', validations, usersController.store);

// Ruta de login

router.get('/login', usersController.login);

// Ruta de perfil

router.get('/profile/:id', usersController.profile);

module.exports = router;