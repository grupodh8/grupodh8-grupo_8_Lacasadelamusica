const User = require('../models/User')
const db = require('../database/models');

function navBarSessionMiddleware (req, res, next) {
    res.locals.isLogged = false;
    let userFromCookie

    let idInCookie = req.cookies.userId;
    db.User.findOne({
        where: {
        id: idInCookie
    }
    }).then((user) => {
        req.session.loggedUser = user;

        if (req.session.loggedUser) {
            res.locals.isLogged = true;
            res.locals.loggedUser = req.session.loggedUser;
        }
    })
    
    // if (userFromCookie) {
    //     req.session.loggedUser = userFromCookie;
    // }

    if (req.session.loggedUser) {
        res.locals.isLogged = true;
        res.locals.loggedUser = req.session.loggedUser;
    }

    next();
};

module.exports = navBarSessionMiddleware;