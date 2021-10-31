// Requires
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

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

// Require de controllers
const productsController = require('../controllers/productsController');

// 1 - TODOS LOS PRODUCTOS

router.get('/', productsController.all);

// 2 - FORMULARIO DE CREACION DE PRODUCTO 

router.get('/create', productsController.create);

// 3 - DETALLE DE UN PRODUCTO 

router.get('/:id', productsController.detail);

// 4 - ACCION DE CREACION DE UN PRODUCTO 

router.post('/', uploadFile.single('image1'), productsController.store);

// 5 - FORMULARIO DE EDICION DE PRODUCTO 

router.get('/:id/edit', productsController.edit);

// 6 - ACCION DE EDICION DE PRODUCTO 

router.put('/:id', productsController.update);

// 7 - ACCION DE BORRADO DE PRODUCTO 

router.delete('/:id', productsController.destroy);


module.exports = router;