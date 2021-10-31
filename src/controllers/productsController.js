const fs = require('fs');
const path = require('path');
const multer = require('multer');

let productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    all: (req,res) => {
        res.render('products', {products: products})
    },

    detail: (req,res) => {
        let productSelected = products.find(item => item.id == req.params.id);
        res.render('productDetail', {product: productSelected })
    },

    create: (req, res) => {
		res.render('createProduct')
	},

    store: (req, res) => {
		let file = req.file
		let newProduct = {
			id: products.length + 1,
			name: req.body.name,
            price: req.body.price,
			category: req.body.category,
			clasificacion: req.body.classification,
			tipo: req.body.type,
			description: req.body.description,
            image1: file.filename,
            image2: '-'
		}

		products.push(newProduct);

		productsJSON = JSON.stringify(products);

		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/products');

	},

    edit: (req, res) => {
		let productToEdit = products.find(product => product.id == req.params.id)
		res.render('editProduct', { productToEdit: productToEdit })
	},

	update: (req, res) => {
		
		let editedItem = {
            id: parseInt(req.params.id),
			name: req.body.name,
            price: req.body.price,
			category: req.body.category,
			clasificacion: req.body.classification,
			tipo: req.body.type,
			description: req.body.description,
            image1: '-',
            image2: '-'
		};

		let indexToInsert = editedItem.id - 1;
		products[indexToInsert] = editedItem;
		
		let productsFinal = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, productsFinal);

		res.redirect('/products');

	},

    destroy: (req, res) => {
		let idToDelete = req.params.id
		let productsNew = products.filter(item => item.id != idToDelete)
	
		let productsJSON = JSON.stringify(productsNew);

		fs.writeFileSync(productsFilePath, productsJSON);

		res.redirect('/products');
	}
    
};

module.exports = productsController;