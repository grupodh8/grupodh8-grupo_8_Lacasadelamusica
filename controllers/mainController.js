const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../databases/productos.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    index: (req,res) => {
        res.render('index');
    },

    register: (req,res) => {
        res.render('register');
    },

    login: (req,res) => {
        res.render('login');
    }
};

module.exports = mainController;