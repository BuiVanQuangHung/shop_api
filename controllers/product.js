const Product = require("../models/Product");

const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (error) {
    next(error);
  }
};
const updateProduct = async (req, res, next) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deteted");
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  const qNew = req.query.new;
  const qcity = req.query.city;
  const qdate = req.query.realTime;

  try {
    // const Products = await Product.find();
    // res.status(200).json(Products);
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qcity) {
      products = await Product.find({
        city: {
          $in: [qcity],
        },
        // realTime: {
        //   $in: [qdate],
        // },
      });
    }
    // else if (qdate) {
    //   products = await Product.find({
    //     realTime: {
    //       $in: [qdate],
    //     },
    //   });
    // }
    else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
};
