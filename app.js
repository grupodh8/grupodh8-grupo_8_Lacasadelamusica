const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const mainRoutes = require('./routes/mainRoutes'); // Rutas main
const productsRoutes = require('./routes/productsRoutes'); // Rutas /products

app.use('/', mainRoutes);
app.use('/products', productsRoutes);


let puerto = 3000;

app.listen(3000, () => { console.log(`Servidor corriendo en http://localhost:${puerto}`) });