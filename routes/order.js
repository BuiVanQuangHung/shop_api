const {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
  getUserOrder,
  getMonthIncome,
} = require("../controllers/order");
const {
  verifyToken,
  verifyAdmin,
  verifyUser,
} = require("../utils/verifyToken");

const router = require("express").Router();

//! CREATE
router.post("/", verifyToken, createOrder);

//! UPDATE
router.put("/:id", verifyAdmin, updateOrder);

//! DELETE
router.delete("/:id", verifyAdmin, deleteOrder);

//! GET
router.get("/find/:userId", verifyUser, getUserOrder);

//! GET ALL
router.get("/", verifyAdmin, getAllOrders);

//! GET MONTHLY
router.get("/income", verifyAdmin, getMonthIncome);

module.exports = router;
