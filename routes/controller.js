const { ObjectId } = require('mongodb');
const db = require('../config/mongodb');
const fs = require('fs');
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

const create = async (req, res, next) => {
    const product = new Product(req.body);
    try {
        const createdProduct = await product.save();
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
    create,
    update,
    destroy
}