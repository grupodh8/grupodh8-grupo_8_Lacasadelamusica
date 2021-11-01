// Requires

const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

// JSON to JS array of products database

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
        } else {
            res.send('usuario registrado con exito');
        }
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
            res.send('usuario logueado con exito');
        }
    },

    // Profile controller

    profile: (req,res) => {
        res.send('perfil de usuario')
    }
};

// Exports

module.exports = usersController;