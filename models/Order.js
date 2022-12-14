const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
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
    amount: { type: Number, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
