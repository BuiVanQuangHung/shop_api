const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productName: {
          type: String,
        },
        productId: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", CardSchema);
