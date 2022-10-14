const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      // required: true,
    },
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    timetravel: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    realTime: {
      type: String,
    },
    tranform: {
      type: String,
      required: true,
    },
    hotels: {
      type: Number,
      min: 0,
      max: 5,
    },
    code: {
      type: String,
      required: true,
    },
    aboutTour: {
      type: Array,
      // required: true,
    },
    rules: {
      type: Array,
      // required: true,
    },
    infor: {
      type: Array,
      // required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
