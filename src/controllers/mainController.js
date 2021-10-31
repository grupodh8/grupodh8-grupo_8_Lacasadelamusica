const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    index: (req,res) => {
        res.render('index', {products: products});
    },

    cart: (req,res) => {
        res.render('productCart')
    }
};

module.exports = mainController;