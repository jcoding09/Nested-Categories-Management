const mongoose = require("mongoose");
const dbConnect = require("../config/dbconfig");
const { Category, Product } = require("../model/category_product_Model");

const initializeDB = async () => {
  // Connect to the database
  dbConnect();

  // Check if there are any existing users
  const existingCategory = await Category.find();
  const existingProduct = await Product.find();

  // If no data exist, seed the database with default data
  if (existingCategory.length === 0) {
    try {
      // Add three default users
      const defaultCategory = [
        { name: "Category 1" },
        { name: "Category 2" },
        { name: "Category 3" },
      ];

      // Insert the default users into the database
      await Category.insertMany(defaultCategory);

      console.log("Default catagory data seeded successfully");
    } catch (error) {
      console.error(`Error seeding default catagory data: ${error.message}`);
    }
  }

  // If no data exist, seed the database with default data
  if (existingProduct.length === 0) {
    try {
      // Add three default users
      const defaultProduct = [
        { name: "Product 1", price: 10, categories: [] },
        { name: "Product 2", price: 20, categories: [] },
        { name: "Product 3", price: 30, categories: [] },
      ];

      // Insert the default users into the database
      await Product.insertMany(defaultProduct);

      console.log("Default product data seeded successfully");
    } catch (error) {
      console.error(`Error seeding default product data: ${error.message}`);
    }
  }
};

module.exports = initializeDB;
