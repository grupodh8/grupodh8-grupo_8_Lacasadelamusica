const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../databases/productos.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    detail: (req,res) => {
        let productSelected = products.find(item => item.id == req.params.id);
        res.render('productDetail', {product: productSelected })
    },

    cart: (req,res) => {
        res.render('productCart')
    }

};

module.exports = productsController;