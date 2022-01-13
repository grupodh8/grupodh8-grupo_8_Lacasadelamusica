const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const navBarSessionMiddleware = require('./src/middlewares/navBarSessionMiddleware')
const cookieParser = require('cookie-parser');

app.use(session({ secret: "...", resave: false, saveUninitialized: false }));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use(cookieParser());
app.use(navBarSessionMiddleware);


app.set('view engine', 'ejs');
app.set('views', [__dirname + '/src/views', __dirname + '/src/views/products', __dirname + '/src/views/users']);

const mainRoutes = require('./src/routes/mainRoutes'); // Rutas main
const productsRoutes = require('./src/routes/productsRoutes'); // Rutas /products
const usersRoutes = require('./src/routes/usersRoutes'); // Rutas /users
const apiUsers = require('./src/routes/api/users');
const apiProducts = require('./src/routes/api/products')

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/api/users', apiUsers);
app.use('/api/products', apiProducts);


app.use((req, res, next) => next(createError(404)));
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('not-found');
});




let puerto = 3001;
app.listen(process.env.PORT || puerto, () => { console.log(`Servidor corriendo en http://localhost:${puerto}`) });


