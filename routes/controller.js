const { ObjectId } = require('mongodb');
const db = require('../config/mongodb');
const bodyParser = require('body-parser');
const Product = require('./model');
const path = require('path');

const read = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json({message: error.message});
    }
}

const readById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product); 
    } catch (error) {
        res.json({message: error.message});
    }
}

const store = async (req, res, next) => {
    const {name, price, stock, status} = req.body;
    try {
        const createdProduct = await Product.create({
            name: name,
            price: price,
            stock: stock,
            status: status
        });
        res.json(createdProduct);
    } catch (error) {
        res.json({message: error.message});
    }
        
}

const update = async (req, res, next) => {
    try {
        const updatedProduct = await Product.updateOne({_id: req.params.id}, {$set: req.body});
        res.json(updatedProduct);
    } catch (error) {
        res.json({message: error.message});
    }
}

const destroy = async (req, res, next) => {
    try {
        const deletedProduct = await Product.deleteOne({_id: req.params.id});
        res.json(deletedProduct);
    } catch (error) {
        res.json({message: error.message});
    }
}

module.exports = {
    read,
    readById,
    store,
    update,
    destroy
}