const express = require('express');

const {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/ProductController');

const ProductRouter = express.Router();


ProductRouter.post('/', createProduct);
ProductRouter.get('/', getAllProducts);
ProductRouter.get('/:id', getProduct);
ProductRouter.put('/:id', updateProduct);
ProductRouter.delete('/:id', deleteProduct);


module.exports = ProductRouter