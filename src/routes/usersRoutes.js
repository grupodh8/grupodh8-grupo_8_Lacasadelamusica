const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const usersController = require('../controllers/usersController');

const validationsRegister = [
    body('first_name').notEmpty().withMessage('Debes ingresar tu nombre'),
    body('last_name').notEmpty().withMessage('Debes ingresar tu apellido'),
    body('address').notEmpty().withMessage('Debes ingresar tu direccion'),
    body('city').notEmpty().withMessage('Debes ingresar tu ciudad'),
    body('zip').isNumeric().withMessage('Debes ingresar un codigo postal valido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('email').isEmail().withMessage('Debes ingresar tu correo electronico')
]

// Ruta de registro

router.get('/register', usersController.register);

// Procesa el registro

router.post('/register', validationsRegister, usersController.store);

// Ruta de login

router.get('/login', usersController.login);

// Ruta de perfil

router.get('/profile/:id', usersController.profile);

module.exports = router;