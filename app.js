const express = require('express');
const app = express();

const path = require('path');

let puerto = 3000;

app.listen(3000, () => { console.log(`Servidor corriendo en http://localhost:${puerto}`) });

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});

app.get('/productDetail', (req,res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
});

app.get('/productCart', (req,res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'))
});

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.use(express.static('./public'));
