const Product = require('../models/productModel');

// @desc    Gets all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
};

// @desc    Gets one product
const getProduct = async (req, res, id) => {
    try {
        const product = await Product.findById(id);

        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Product not found' }));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product));
        }

    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    getProducts, getProduct
};