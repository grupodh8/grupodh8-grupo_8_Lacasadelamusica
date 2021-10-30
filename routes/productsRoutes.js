// Requires
const express = require('express');
const router = express.Router();

// Require de controllers
const productsController = require('../controllers/productsController');


router.get('/productDetail', (req,res) => {
    res.render('productDetail')
});

router.get('/productCart', (req,res) => {
    res.render('productCart')
});

module.exports = router;