// Requires

const fs = require('fs');
const path = require('path');

// JSON to JS array of products database

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Main controllers

const mainController = {

    // Index controller

    index: (req,res) => {
        res.render('index', {products: products});
    },

    // Shopping cart controller

    cart: (req,res) => {
        res.render('productCart')
    }
};

// Exports

module.exports = mainController;