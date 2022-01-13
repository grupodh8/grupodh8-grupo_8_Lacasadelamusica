// Requires

const multer = require('multer');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');

// Users controllers

const usersController = {

    // Register form controller

    register: (req, res) => {
        res.render('register');
    },

    // Store new user controller

    store: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then((user) => {
            if (user) {
                return res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este email ya fue registrado'
                        }
                    },
                    oldData: req.body
                });
            } else {
                db.User.create({
                    ...req.body,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    avatar: req.file.filename,
                });
                res.redirect('/users/login')
            }
        }).catch(err => { console.log(err); })
    },

    // Login form controller

    login: (req, res) => {
        res.render('login');
    },

    // Process login controller

    loginAction: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('login', {
                errors: resultValidation.mapped()
            });
        }

        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then((user) => {

            if (user) {
                let passwordCompare = bcryptjs.compareSync(req.body.password, user.password);
                if (passwordCompare) {
                    let userLogged = {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        address: user.address,
                        city: user.city,
                        zip: user.zip,
                        email: user.email,
                        avatar: user.avatar
                    }

                    req.session.loggedUser = userLogged;
                    
                    if (req.body.remember_me) {
                        res.cookie('userId', req.session.loggedUser.id, { maxAge: (1000 * 60) * 2 });
                        return res.redirect('/users/profile')
                    } else {
                        return res.redirect('/users/profile')
                    }
                } else {
                    return res.render('login', {
                        errors: {
                            email: {
                                msg: 'Credenciales invalidas'
                            },
                            password: {
                                msg: 'Credenciales invalidas'
                            }
                        }
                    });
                }
            } else {
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'Credenciales invalidas'
                        },
                        password: {
                            msg: 'Credenciales invalidas'
                        }
                    }
                });
            }
        }).catch(err => { console.log(err); })
    },

    // Profile controller

    profile: (req, res) => {
        res.render('profile', { user: req.session.loggedUser })
    },

    logout: (req, res) => {
        res.clearCookie('userId');
        req.session.destroy();
        res.redirect('/');
    },

    delete: (req, res) => {
		db.User.destroy({
			where: {
				id: req.params.id
			}
		})
		res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
	},

    update: (req, res) => {
		db.User.findOne({
            where: {
                email: req.session.loggedUser.email
            }
        })
			.then(function (user) {
				res.render('editProfile', {
					user: user
				})
			})
            .catch(err => { console.log(err); })
	},

    save: (req, res) => {
        db.User.findOne({
            where: {
                id: req.session.loggedUser.id
            }
        })
        .then(function(user) {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('editProfile', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                user: user
            });
        } else {
            let passwordCompare = bcryptjs.compareSync(req.body.password, user.password);
            if (passwordCompare) {
            db.User.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                city: req.body.city,
                zip: req.body.zip,
                avatar: req.file.filename
            }, {
                where: {
                    id: req.session.loggedUser.id
                }
            })
        
            } else {
                return res.render('editProfile', {
                    errors: {
                        password: {
                            msg: 'Constraseña incorrecta'
                        }
                    }
                });
            }
    }
        res.clearCookie('userEmail');
        req.session.destroy();
        res.render('login', {
            mensaje: 'Por favor, vuelve a iniciar sesion para aplicar cambios'
                }
            )
    }).catch(err => { console.log(err); })}
};

// Exports

module.exports = usersController;