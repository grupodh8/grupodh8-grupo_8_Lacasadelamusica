// Requires

const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { validationResult } = require('express-validator');

const User = require('../models/User');

// JSON to JS array of products database

let productsFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Users controllers

const usersController = {

    // Register form controller

    register: (req,res) => {
        res.render('register');
    },

    // Store new user controller
    
    store: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', { 
                errors : resultValidation.mapped(),
                oldData : req.body 
            });
        }
        User.create(req.body, req.file.filename);
		return res.send('Usuario registrado con exito');
    },

    // Login form controller

    login: (req,res) => {
        res.render('login');
    },

    // Process login controller

    loginAction: (req,res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('login', { 
                errors : resultValidation.mapped() 
            });
        } else {
            res.redirect('/profile');
        }
    },

    // Profile controller

    profile: (req,res) => {
        res.render('profile')
    }
};

// Exports

module.exports = usersController;