const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");
const User = require("../models/User");
const connectDB = require("../config/db");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    const adminUser = await User.create({
      name: "Admin",
      email: "admin@example.com",
      password: "123456",
      isAdmin: true,
    });

    console.log("Dữ liệu đã được nhập!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
