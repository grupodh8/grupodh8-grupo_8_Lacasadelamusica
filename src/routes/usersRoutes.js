// Requires
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const validationsRegister = require('../middlewares/validateRegisterMiddleware');
const validateProfile = require('../middlewares/validateProfileMiddleware');
const validationsLogin = require('../middlewares/validateLoginMiddleware');
const uploadFile = require('../middlewares/usersMulterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


// Register form route
router.get('/register', guestMiddleware, usersController.register);

// Register process route
router.post('/register', guestMiddleware, uploadFile.single('profileimage'), validationsRegister, usersController.store);

// Login form route
router.get('/login', guestMiddleware, usersController.login);

// Login process route
router.post('/login', guestMiddleware, validationsLogin, usersController.loginAction);

// User profile route
// router.get('/profile/:id', usersController.profile);
router.get('/profile/', authMiddleware, usersController.profile);

// logout controller
router.get('/logout/', authMiddleware, usersController.logout);

// Update user form
router.get('/edit/', authMiddleware, usersController.update)

// Save user route
router.post('/edit/', authMiddleware, uploadFile.single('profileimage'), validateProfile, usersController.save)

// Delete user
router.delete('/:id', authMiddleware, usersController.delete);

// Exports
module.exports = router;