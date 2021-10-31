// Requires
const express = require('express');
const router = express.Router();

// Require de controllers
const productsController = require('../controllers/productsController');

router.get('/', productsController.all);

router.get('/detail/:id', productsController.detail);

router.get('/cart', productsController.cart);

// CREAR PRODUCTO

router.post('/create', productsController.store);
router.get('/create', productsController.create);

// EDITAR PRODUCTO

router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);

module.exports = router;