const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersController = {
    register: (req,res) => {
        res.render('register');
    },
    
    store: (req, res) => {
        res.send(req.body);
    },

    login: (req,res) => {
        res.render('login');
    },

    profile: (req,res) => {
        res.send('perfil de usuario')
    }
};

module.exports = usersController;