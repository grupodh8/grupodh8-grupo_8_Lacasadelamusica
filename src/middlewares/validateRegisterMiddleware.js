const { body } = require('express-validator');
const path = require('path');

// Express-validator validations for register and login form
const validationsRegister = [
    body('first_name').isLength({ min: 2 }).withMessage('Debes ingresar un nombre valido'),
    body('last_name').isLength({ min: 2 }).withMessage('Debes ingresar tu apellido'),
    body('address').isLength({ min: 2 }).withMessage('Debes ingresar tu direccion'),
    body('city').isLength({ min: 2 }).withMessage('Debes ingresar tu ciudad'),
    body('zip').isNumeric().withMessage('Debes ingresar un codigo postal valido').bail().isLength({min: 4, max: 5}).withMessage('El codigo postal debe tener 4 o 5 caracteres'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña').bail().isLength({ min: 8 }).withMessage('Tu contraseña debe tener al menos 8 caracteres'),
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

module.exports = validationsRegister;