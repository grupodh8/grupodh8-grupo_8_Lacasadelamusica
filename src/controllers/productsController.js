// Requires

const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { validationResult } = require('express-validator');
const { fields } = require('../middlewares/productMulterMiddleware');
let db = require("../database/models");
const { nextTick } = require('process');
const OP = db.Sequelize.Op;

// Products controllers

const productsController = {

	// Get all products controller

	all: (req, res) => {
		db.Product.findAll()
			.then((products) => {
				res.render('products', { products: products })
			})
			.catch(err => { console.log(err); })
	},

	// Product detail controller

	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {
			include: [{ association: "categories" }, { association: "brands" }]
		})
			.then((product) => {
				res.render('productDetail', {
					product: product,
				});
			})
			.catch(err => { console.log(err); })
	},

	// Create product controller

	create: function (req, res) {
		db.Category.findAll().then(function (categories) {
			db.Brand.findAll().then(function (brands) {
				res.render('createProduct', {
					categories: categories,
					brands: brands
				})
			})
			.catch(err => { console.log(err); })
		})
		.catch(err => { console.log(err); })

	},

	// Store new product controller

	store: (req, res) => {
		const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			db.Category.findAll().then(function (categories) {
				db.Brand.findAll().then(function (brands) {
					res.render('createProduct', {
						errors: resultValidation.mapped(),
						oldData: req.body,
						categories: categories,
						brands: brands
					})
				}).catch(err => { console.log(err); })
			}).catch(err => { console.log(err); })
		} else {
			db.Product.create({
				...req.body,
				image: req.file.filename,
			});
			res.redirect('/products');
		}
	},

	// Edit product controller

	edit: (req, res) => {
		let productRequest = db.Product.findByPk(req.params.id);
		let categoryRequest = db.Category.findAll();
		let brandRequest = db.Brand.findAll();

		Promise.all([productRequest, categoryRequest, brandRequest])
			.then(([product, categories, brands]) => {
				res.render('editProduct', {
					product: product,
					categories: categories,
					brands: brands
				})
			})
			.catch(err => { console.log(err); })
	},

	// Save product edit controller

	update: (req, res) => {
		let productRequest = db.Product.findByPk(req.params.id);
		let categoryRequest = db.Category.findAll();
		let brandRequest = db.Brand.findAll();

		Promise.all([productRequest, categoryRequest, brandRequest])
			.then(function ([product, categories, brands]) {
				const resultValidation = validationResult(req);
				if (resultValidation.errors.length > 0) {
					return res.render('editProduct', {
						errors: resultValidation.mapped(),
						oldData: req.body,
						product: product,
						categories: categories,
						brands: brands
					});
				} else {
					db.Product.update({
						...req.body,
						image: req.file.filename,
					}, {
						where: {
							id: req.params.id
						}
					})
				}
				res.redirect('/products/' + req.params.id)
			})
			.catch(err => { console.log(err); })
	},

	section: (req, res) => {
        let section = req.params.id;
    
        db.Product.findAll({
          where: {
            category_id: { [OP.like]: `%${section}%` },
          }
		})
          .then((results) => {
            res.render("section", { results: results });
          })
          .catch((error) => res.send(error));
    },

	// Delete product controller

	destroy: (req, res) => {
		db.Product.destroy({
			where: {
				id: req.params.id
			}
		})
		res.redirect('/products');
	}
};

// Exports

module.exports = productsController;