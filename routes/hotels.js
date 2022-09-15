const {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
} = require("../controllers/hotels");
const Hotel = require("../models/Hotel");

const router = require("express").Router();

//! CREATE
router.post("/", createHotel);

//! UPDATE
router.put("/:id", updateHotel);

//! DELETE
router.delete("/:id", deleteHotel);

//! GET
router.get("/:id", getHotel);

//! GET ALL
router.get("/", getAllHotels);

module.exports = router;
