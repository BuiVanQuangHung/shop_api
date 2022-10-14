const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
} = require("../controllers/product");
const { verifyAdmin } = require("../utils/verifyToken");
const Product = require("../models/Product");

const router = require("express").Router();

//! CREATE
router.post("/", verifyAdmin, createProduct);

//! UPDATE
router.put("/:id", verifyAdmin, updateProduct);

//! DELETE
router.delete("/:id", verifyAdmin, deleteProduct);

//! GET
router.get("/find/:id", getProduct);

//! GET ALL
router.get("/", getAllProducts);

module.exports = router;
