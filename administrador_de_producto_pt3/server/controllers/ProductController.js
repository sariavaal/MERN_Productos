const ProductModel = require('../models/Product.model');

module.exports = {
    createProduct: (req, res) => {
        ProductModel.create(req.body)
            .then(product => res.json(product))
            .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
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
    },
    //actualizar prodcuto
    updateProduct: (req,res) => {
        ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    //eliminar prodcuto
    deleteProduct: (req, res) => {
        ProductModel.deleteOne({ _id: req.params.id })
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
}