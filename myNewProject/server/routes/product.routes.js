const express = require('express');

const {
    createProduct,
    getAllProducts
} = require('../controllers/ProductController');

const ProductRouter = express.Router();


ProductRouter.post('/', createProduct);
ProductRouter.get('/', getAllProducts);

module.exports = ProductRouter