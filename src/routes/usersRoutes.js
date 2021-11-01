// Requires
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const usersController = require('../controllers/usersController');

// Express-validator validations for register and login form

const validationsRegister = [
    body('first_name').notEmpty().withMessage('Debes ingresar tu nombre'),
    body('last_name').notEmpty().withMessage('Debes ingresar tu apellido'),
    body('address').notEmpty().withMessage('Debes ingresar tu direccion'),
    body('city').notEmpty().withMessage('Debes ingresar tu ciudad'),
    body('zip').isNumeric().withMessage('Debes ingresar un codigo postal valido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('email').isEmail().withMessage('Debes ingresar tu correo electronico')
]

const validationsLogin = [
    body('email').notEmpty().withMessage('Debes ingresar tu correo electronico').bail()
    .isEmail().withMessage('Debes ingresar un correo electronico valido'),
    body('password').notEmpty().withMessage('Ingresa tu contraseña')
]

// Register form route
router.get('/register', usersController.register);

// Register process route
router.post('/register', validationsRegister, usersController.store);

// Login form route
router.get('/login', usersController.login);

// Login process route
router.post('/login', validationsLogin, usersController.loginAction);

// User profile route
router.get('/profile/:id', usersController.profile);


// Exports
module.exports = router;