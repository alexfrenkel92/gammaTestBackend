const express = require('express');
const app = express();
const cors = require('cors');

const products = require('./controller/productsController')

app.use(cors());
app.use(express.json());

app.use('/records', products);

module.exports = app;