const mongoose = require('mongoose');

const productSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: [true, 'Please provide a product title']
        },
        price: {
            type: Number,
            required: [true, 'Please, provide a product price']
        },
        description: {
            type: String,
            required: [true, 'Please, provide a product description']
        },
        image: {
            type: String,
        },
        category: [String],
    });

 module.exports = mongoose.model('product', productSchema);
