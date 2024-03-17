const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }

})
    

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel