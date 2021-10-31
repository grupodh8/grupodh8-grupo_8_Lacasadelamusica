const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/views'));
app.set('views', [__dirname + '/src/views', __dirname + '/src/views/products', __dirname + '/src/views/users']);

const mainRoutes = require('./src/routes/mainRoutes'); // Rutas main
const productsRoutes = require('./src/routes/productsRoutes'); // Rutas /products

app.use('/', mainRoutes);
app.use('/products', productsRoutes);


let puerto = 3000;

app.listen(3000, () => { console.log(`Servidor corriendo en http://localhost:${puerto}`) });