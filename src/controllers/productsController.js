// Requires

const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { validationResult } = require('express-validator');

// JSON to JS array of products database

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Products controllers

const productsController = {

	// Get all products controller

    all: (req,res) => {
        res.render('products', {products: products})
    },

	// Product detail controller

    detail: (req,res) => {
        let productSelected = products.find(item => item.id == req.params.id);
        res.render('productDetail', {product: productSelected })
    },

	// Create product controller

    create: (req, res) => {
		res.render('createProduct')
	},

	// Store new product controller

    store: (req, res) => {
		const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('createProduct', { 
                errors : resultValidation.mapped(),
                oldData : req.body 
            });
        } else {
			let file = req.file
			let newProduct = {
			id: products.length + 1,
			name: req.body.name,
            price: req.body.price,
			category: req.body.category,
			classification: req.body.classification,
			type: req.body.type,
			description: req.body.description,
            image1: file.filename,
            image2: '-'
			}

			products.push(newProduct);
			productsJSON = JSON.stringify(products);
			fs.writeFileSync(productsFilePath, productsJSON);

			res.redirect('/products');
        }
	},

	// Edit product controller

    edit: (req, res) => {
		let productToEdit = products.find(product => product.id == req.params.id)
		res.render('editProduct', { productToEdit: productToEdit })
	},

	// Save product edit controller

	update: (req, res) => {
		let productToEdit = products.find(product => product.id == req.params.id)
		const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('editProduct', { 
				errors : resultValidation.mapped(),
				productToEdit : productToEdit,
                oldData : req.body 
            });
        } else {
			let file = req.file
			let editedItem = {
            id: parseInt(req.params.id),
			name: req.body.name,
            price: req.body.price,
			category: req.body.category,
			classification: req.body.classification,
			type: req.body.type,
			description: req.body.description,
            image1: file.filename,
            image2: '-'
		}

			let indexToInsert = editedItem.id - 1;
			products[indexToInsert] = editedItem;
			let productsFinal = JSON.stringify(products);
			fs.writeFileSync(productsFilePath, productsFinal);

			res.redirect('/products');
        }
	},

	// Delete product controller

    destroy: (req, res) => {
		let idToDelete = req.params.id
		let productsNew = products.filter(item => item.id != idToDelete)	
		let productsJSON = JSON.stringify(productsNew);
		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/products');
	}
};

// Exports

module.exports = productsController;