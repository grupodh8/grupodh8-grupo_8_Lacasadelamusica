const { body } = require('express-validator');
const path = require('path');


// Express-validator validations for products forms
const validationsProducts = [
    body('name').isLength({ min: 5 }).withMessage('Debes ingresar un nombre de producto valido'),
    body('price').notEmpty().withMessage('Debes ingresar un precio').bail()
    .isNumeric().withMessage('Debes ingresar un precio valido'),
    body('sku').isLength(6).withMessage('El SKU debe tener 6 digitos'),
    body('stock').notEmpty().withMessage('Debes ingresar un stock'),
    body('classification').notEmpty().withMessage('Debes seleccionar una clasificacion'),
    body('category_id').notEmpty().withMessage('Debes seleccionar una categoria'),
    body('brand_id').notEmpty().withMessage('Debes seleccionar una marca'),
    body('type').notEmpty().withMessage('Debes especificar el tipo de producto'),
    body('description').isLength({ min: 20 }).withMessage('Debes ingresar una descripcion de al menos 20 caracteres'),
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