// Requires
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const usersController = require('../controllers/usersController');
const multer = require('multer');
const path = require('path');

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/users')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const uploadFile = multer({storage});

// Express-validator validations for register and login form
const validationsRegister = [
    body('first_name').notEmpty().withMessage('Debes ingresar tu nombre'),
    body('last_name').notEmpty().withMessage('Debes ingresar tu apellido'),
    body('address').notEmpty().withMessage('Debes ingresar tu direccion'),
    body('city').notEmpty().withMessage('Debes ingresar tu ciudad'),
    body('zip').isNumeric().withMessage('Debes ingresar un codigo postal valido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('email').isEmail().withMessage('Debes ingresar tu correo electronico'),
    body('image1').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif']
        if (!file) {
            throw new Error ('Debes subir una imagen de perfil');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error ('Las extensiones aceptadas son .jpg, .png y .gif')
            }
            return true
        }
    })
];

const validationsLogin = [
    body('email').notEmpty().withMessage('Debes ingresar tu correo electronico').bail()
    .isEmail().withMessage('Debes ingresar un correo electronico valido'),
    body('password').notEmpty().withMessage('Ingresa tu contraseña')
]

// Register form route
router.get('/register', usersController.register);

// Register process route
router.post('/register', uploadFile.single('profileimage'), validationsRegister, usersController.store);

// Login form route
router.get('/login', usersController.login);

// Login process route
router.post('/login', validationsLogin, usersController.loginAction);

// User profile route
router.get('/profile/:id', usersController.profile);


// Exports
module.exports = router;