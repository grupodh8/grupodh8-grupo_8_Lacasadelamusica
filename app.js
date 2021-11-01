const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

app.set('view engine', 'ejs');
app.set('views', [__dirname + '/src/views', __dirname + '/src/views/products', __dirname + '/src/views/users']);

const mainRoutes = require('./src/routes/mainRoutes'); // Rutas main
const productsRoutes = require('./src/routes/productsRoutes'); // Rutas /products
const usersRoutes = require('./src/routes/usersRoutes'); // Rutas /users

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes)

let puerto = 3000;
app.listen(process.env.PORT || puerto, () => { console.log(`Servidor corriendo en http://localhost:${puerto}`) });