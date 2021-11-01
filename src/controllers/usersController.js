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
        } else {
            // let file = req.file
			// let newUser = {
			// id: users.length + 1,
			// first_name: req.body.first_name,
            // last_name: req.body.last_name,
			// address: req.body.address,
			// city: req.body.city,
			// zip: req.body.zip,
			// email: req.body.email,
            // password: req.body.password,
            // profileimage: file.filename
			// }

			// users.push(newUser);
			// usersJSON = JSON.stringify(users);
			// fs.writeFileSync(productsFilePath, usersJSON);

            User.create(req.body);
			return res.send('Usuario registrado con exito');
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