const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersController = {
    register: (req,res) => {
        res.render('register');
    },
    
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

    login: (req,res) => {
        res.render('login');
    },

    profile: (req,res) => {
        res.send('perfil de usuario')
    }
};

module.exports = usersController;