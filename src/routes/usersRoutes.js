// Requires
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const validationsRegister = require('../middlewares/validateRegisterMiddleware');
const validationsLogin = require('../middlewares/validateLoginMiddleware');
const uploadFile = require('../middlewares/usersMulterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

// Multer configuration


// Register form route
router.get('/register', guestMiddleware, usersController.register);

// Register process route
router.post('/register', uploadFile.single('profileimage'), validationsRegister, usersController.store);

// Login form route
router.get('/login', guestMiddleware, usersController.login);

// Login process route
router.post('/login', validationsLogin, usersController.loginAction);

// User profile route
// router.get('/profile/:id', usersController.profile);
router.get('/profile/', usersController.profile);


// Exports
module.exports = router;