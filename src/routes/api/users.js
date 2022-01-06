const express = require('express');
const router = express.Router();
const apiUsers = require('../../controllers/api/apiUsers')

router.get('/', apiUsers.list);

router.get('/:id', apiUsers.findOne)


module.exports = router;