// Requires

const fs = require('fs');
const path = require('path');
const db = require('../database/models');

// JSON to JS array of products database

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Main controllers

const mainController = {

    // Index controller

    index: (req,res) => {
        let mainTopRequest = db.Product.findAll({
            where: {
                classification: 'main-top'
            },
            limit: 8
        })
        let mainBottomRequest = db.Product.findAll({
            where: {
                classification: 'main-bottom'
            },
            limit: 8
        })

        Promise.all([mainTopRequest, mainBottomRequest])
			.then(function ([top, bottom]) {
                res.render('index', {
                    top: top,
                    bottom: bottom
                });
            })
    },

    // Shopping cart controller

    cart: (req,res) => {
        res.render('productCart')
    }
};

// Exports

module.exports = mainController;