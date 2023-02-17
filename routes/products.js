const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const path = require('path');
const fs = require('fs');
const Product = require('./model');
const productController = require('./controller');

router.post('/', productController.store);

router.get('/', productController.read);

router.get('/:id', productController.readById);

router.patch('/:id', productController.update);

router.delete('/:id', productController.destroy);

module.exports = router;
