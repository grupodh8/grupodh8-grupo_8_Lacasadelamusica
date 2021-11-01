const { body } = require('express-validator');
const path = require('path');


// Express-validator validations for products forms
const validationsProducts = [
    body('name').notEmpty().withMessage('Debes ingresar el nombre del producto'),
    body('price').notEmpty().withMessage('Debes ingresar un precio').bail()
    .isNumeric().withMessage('Debes ingresar un precio valido'),
    body('category').notEmpty().withMessage('Debes seleccionar una categoria'),
    body('classification').notEmpty().withMessage('Debes seleccionar una clasificacion'),
    body('type').notEmpty().withMessage('Debes especificar el tipo de producto'),
    body('description').notEmpty().withMessage('Debes ingresar una descripcion'),
    body('image1').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif']
        if (!file) {
            throw new Error ('Debes subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error ('Las extensiones aceptadas son .jpg, .png y .gif')
            }
            return true
        }
    })
];

module.exports = validationsProducts;