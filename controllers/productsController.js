const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../databases/productos.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    detail: (req,res) => {
        res.render('productDetail')
    },

    cart: (req,res) => {
        res.render('productCart')
    }

};

module.exports = productsController;