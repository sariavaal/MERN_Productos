const express = require('express');

const {
    createProduct,
    getAllProducts,
    getProduct
} = require('../controllers/ProductController');

const ProductRouter = express.Router();


ProductRouter.post('/', createProduct);
ProductRouter.get('/', getAllProducts);
ProductRouter.get('/:id', getProduct);

module.exports = ProductRouter