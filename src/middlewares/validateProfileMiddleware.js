const { body } = require('express-validator');
const path = require('path');

// Express-validator validations for register and login form
const validateProfile = [
    body('first_name').notEmpty().withMessage('Debes ingresar tu nombre'),
    body('last_name').notEmpty().withMessage('Debes ingresar tu apellido'),
    body('address').notEmpty().withMessage('Debes ingresar tu direccion'),
    body('city').notEmpty().withMessage('Debes ingresar tu ciudad'),
    body('zip').isNumeric().withMessage('Debes ingresar un codigo postal valido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
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

module.exports = validateProfile;