const express = require('express');
const router = express.Router();
const apiProducts = require('../../controllers/api/apiProducts')

router.get('/', apiProducts.list);

router.get('/:id', apiProducts.findOne)

module.exports = router;