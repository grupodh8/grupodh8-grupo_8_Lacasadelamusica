// Requires
const express = require('express');
const router = express.Router();
const multer = require('multer');

const validationsProducts = require('../middlewares/validateProductMiddleware');
const uploadFile = require('../middlewares/productMulterMiddleware');
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');

// All products route
router.get('/', productsController.all);

// Store new product process route
router.post('/create', authMiddleware, uploadFile.single('image1'), validationsProducts, productsController.store);

// Product create form route
router.get('/create', authMiddleware, productsController.create);

// Product detail route
router.get('/:id', productsController.detail);

// Product edit form route
router.get('/:id/edit', productsController.edit);

// Edit product process route 
router.put('/:id', uploadFile.single('image1'), validationsProducts, productsController.update);

// Delete product route
router.delete('/:id', authMiddleware, productsController.destroy);


// Exports
module.exports = router;