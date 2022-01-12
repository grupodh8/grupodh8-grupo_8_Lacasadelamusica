const db = require('../database/models');

function navBarSessionMiddleware (req, res, next) {
    res.locals.isLogged = false;
    let idInCookie

    if (req.cookies.userId != undefined) {
        idInCookie = req.cookies.userId;
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
        }).catch(err => { console.log(err); })    
    } else {
        idInCookie = '';
    }

    
    if (req.session.loggedUser) {
        res.locals.isLogged = true;
        res.locals.loggedUser = req.session.loggedUser;
    }

    next();
};

module.exports = navBarSessionMiddleware;