const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
} = require("../controllers/product");
const Product = require("../models/Product");

const router = require("express").Router();

//! CREATE
router.post("/", createProduct);

//! UPDATE
router.put("/:id", updateProduct);

//! DELETE
router.delete("/:id", deleteProduct);

//! GET
router.get("/:id", getProduct);

//! GET ALL
router.get("/", getAllProducts);

module.exports = router;
