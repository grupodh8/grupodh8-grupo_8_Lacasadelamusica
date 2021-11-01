// Requires
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');


// Configuracion multer

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const uploadFile = multer({storage});

// Validaciones de express validator

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

]

// Require de controllers
const productsController = require('../controllers/productsController');

// 1 - TODOS LOS PRODUCTOS

router.get('/', productsController.all);

// 2 - FORMULARIO DE CREACION DE PRODUCTO 

router.get('/create', productsController.create);

// 3 - DETALLE DE UN PRODUCTO 

router.get('/:id', productsController.detail);

// 4 - ACCION DE CREACION DE UN PRODUCTO 

router.post('/', uploadFile.single('image1'), validationsProducts, productsController.store);

// 5 - FORMULARIO DE EDICION DE PRODUCTO 

router.get('/:id/edit', productsController.edit);

// 6 - ACCION DE EDICION DE PRODUCTO 

router.put('/:id', uploadFile.single('image1'), validationsProducts, productsController.update);

// 7 - ACCION DE BORRADO DE PRODUCTO 

router.delete('/:id', productsController.destroy);


module.exports = router;