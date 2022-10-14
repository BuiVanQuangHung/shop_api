const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/product");
const cookieParser = require("cookie-parser");

dotenv.config();

const connect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Db connect Succsessful"));
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDb disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDb connected");
});
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productsRoute);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

app.listen(process.env.port || 8000, () => {
  connect();
  console.log("Backend server is running");
});
