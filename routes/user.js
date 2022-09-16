const {
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
} = require("../controllers/user");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");

const router = require("express").Router();

//! UPDATE
router.put("/:id", verifyUser, updateUser);

//! DELETE
router.delete("/:id", verifyUser, deleteUser);

//! GET
router.get("/:id", verifyUser, getUser);

//! GET ALL
router.get("/", verifyAdmin, getAllUsers);

module.exports = router;
