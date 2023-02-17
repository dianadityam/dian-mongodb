const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name must be field'],
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 1000,
        max: 1000000000
    },
    stock: Number,
    status: {
        type: Boolean,
        default: true
    }
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;