// Requires

const db = require('../database/models');
const OP = db.Sequelize.Op;

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

    search: (req, res, next) => {
        let search = req.query.search;
    
        db.Product.findAll({
          where: {
            name: { [OP.like]: `%${search}%` },
          },
        })
          .then((results) => {
            res.render("search", { results: results });
          })
          .catch((error) => res.send(error));
    },

    // Shopping cart controller

    cart: (req,res) => {
        res.render('productCart')
    }
};

// Exports

module.exports = mainController;