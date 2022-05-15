const Product = require('../models/product');
const asyncHandler = require('express-async-handler');

// @route GET   /api/product
// @desc   fetch all products
// @access public 
exports.getProducts = asyncHandler(async (req, res, next) => {
        const products = await Product.find() 
        res.status(200).json({sucess: true, products})
   
})

// @route POST  /api/products
// @desc   add a new products
// @access private - Admin

exports.postProduct = asyncHandler(async (req, res, next) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json({success: true, savedProduct})
})


// @route GET  /api/products: id
// @desc   fetch a single product with ID
// @access public

exports.getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.prodId)
    res.status(200).json({sucess: true, product})
});

// @route PUT  /api/products: id
// @desc   update a single product with ID
// @access private

exports.putProduct = asyncHandler(async(req, res, next) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.prodId, { $set: req.body}, {new: true})
    res.status(200).json({sucess: true, updatedProduct})
});

// @route DELETE  /api/products: id
// @desc   DELETE a single product with ID
// @access private

exports.deleteProduct = asyncHandler(async(req, res, next)=> {
    const deletedProduct = await Product.findByIdAndDelete(req.params.prodId)
    res.status(200).json({sucess: true, message: 'Product Deleted'})
});