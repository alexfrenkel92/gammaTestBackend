const express = require('express');
const router = express.Router();

const { insertProduct, getProducts, deleteProduct } = require('../database');

router.get('/:id?', (req, res) => {
    const productId = req.params.id
    getProducts(productId)
        .then((products) => {
            if (products.length > 0) {
                products = products.map((product) => ({
                    productId: product._id,
                    productName: product.productName,
                    productPrice: product.productPrice,
                }))
                res.status(200).json(products)
            } else if (products.length === 0) {
                res.status(404).json({ Message: 'No product found with the given ID' })
            }
        })
        .catch((error) => {
            console.log('Controller error: ' + error)
            res.status(400).end()
        })
});

router.post('/', (req, res) => {
    const productId = req.body._id;
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;

    if (productId === '' || productName === '' || productPrice === '') {
        res.status(400).json({ Status: 'Missing fields' });
        return;
    }
    insertProduct(productId, productName, productPrice)
        .then((result) => {
            res.status(200);
            res.json(result.ops).end() //result.ops returns the inserted object
        })
        .catch((error) => {
            console.log('Controller error: ' + error);
            res.status(400).json({ Error: 'ID already declared'}).end();
        })
});

router.delete('/:id', (req, res) => {
    const productId = req.params.id
    deleteProduct(productId)
        .then((products) => {
            if (products.value !== null) {
                res.status(200).json(products.value).end();
            } else if (products.value == null) {
                res.status(404).json({ Message: 'No product found with the given ID' })
            }
        })
        .catch((error) => {
            console.log('Controller error: ' + error);
            res.status(400).end();
        })
})

module.exports = router;