const express = require('express')

const ProductController = require('../controllers/product.controller')

const ProductRouter = express.Router()

//api/products
ProductRouter.get('/', ProductController.getAllProducts)
ProductRouter.get('/:id', ProductController.getProduct)
ProductRouter.post('/', ProductController.createProduct)
ProductRouter.put('/:id', ProductController.updateProduct)
ProductRouter.delete('/:id', ProductController.deleteProduct)

module.exports = ProductRouter