const {
  createCard,
  updateCard,
  deleteCard,
  getAllCards,
  getUserCard,
} = require("../controllers/card");
const {
  verifyToken,
  verifyAdmin,
  verifyUser,
} = require("../utils/verifyToken");

const router = require("express").Router();

//! CREATE
router.post("/", verifyToken, createCard);

//! UPDATE
router.put("/:id", verifyUser, updateCard);

//! DELETE
router.delete("/:id", verifyUser, deleteCard);

//! GET
router.get("/find/:userId", verifyUser, getUserCard);

//! GET ALL
router.get("/", verifyAdmin, getAllCards);

module.exports = router;
