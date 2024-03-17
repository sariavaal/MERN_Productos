const ProductModel = require('../models/Product.model');

module.exports = {
    createProduct: (req, res) => {
        ProductModel.create(req.body)
            .then(product => res.json(product))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    getAllProducts: (req, res) => {
        ProductModel.find()
            .then(products => res.json(products))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    //filtrar por producto
    getProduct: (req, res) => {
        ProductModel.findOne({ _id: req.params.id })
            .then(product => res.json(product))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
}