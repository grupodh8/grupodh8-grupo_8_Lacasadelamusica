// Requires

const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const User = require('../models/User');

// JSON to JS array of products database

let productsFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Users controllers

const usersController = {

    // Register form controller

    register: (req, res) => {
        res.render('register');
    },

    // Store new user controller

    store: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDatabase = User.findUserByField('email', req.body.email);

        if (userInDatabase) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya fue registrado'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }


        let userCreated = User.create(userToCreate);
        return res.redirect('/users/login');
    },

    // Login form controller

    login: (req, res) => {
        res.render('login');
    },

    // Process login controller

    loginAction: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('login', {
                errors: resultValidation.mapped()
            });
        }

        let userToLogin = User.findUserByField('email', req.body.email);
        if (userToLogin) {
            let passwordCompare = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (passwordCompare) {
                delete userToLogin.password;
                req.session.loggedUser = userToLogin;
                return res.redirect('/users/profile')
            }
        }

        return res.render('login', {
            errors: {
                email: {
                    msg: 'Credenciales invalidas'
                },
                password: {
                    msg: 'Credenciales invalidas'
                }
            }
        });

    },

    // Profile controller

    profile: (req, res) => {
        res.render('profile', { user: req.session.loggedUser })
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
};

// Exports

module.exports = usersController;