// Requires
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');


// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const uploadFile = multer({storage});

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

// Controller require
const productsController = require('../controllers/productsController');

// All products route
router.get('/', productsController.all);

// Product create form route
router.get('/create', productsController.create);

// Product detail route
router.get('/:id', productsController.detail);

// Store new product process route
router.post('/', uploadFile.single('image1'), validationsProducts, productsController.store);

// Product edit form route
router.get('/:id/edit', productsController.edit);

// Edit product process route 
router.put('/:id', uploadFile.single('image1'), validationsProducts, productsController.update);

// Delete product route
router.delete('/:id', productsController.destroy);


// Exports
module.exports = router;