const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 7000;
const url = process.env.MONGO_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
    app.use("/api/auth", authRoute);
    app.listen(PORT, () => {
      console.log("Backend is running");
    });
  })
  .catch((err) => console.error('Error connecting to MongoDB', err));
