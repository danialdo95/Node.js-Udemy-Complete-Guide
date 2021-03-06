const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const adminController =  require('../controllers/admin')

const router = express.Router();

router.get('/add-product', adminController.getAddProducts);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProducts);

router.get('/edit-product/:productId', adminController.getEditProducts);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;

