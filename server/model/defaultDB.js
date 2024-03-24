const mongoose = require("mongoose");
const dbConnect = require("../config/dbconfig");
const Category = require("../model/categoryModel");
const Product = require("../model/productModel");
const SubCategory = require("../model/subcategoryModel");

const initializeDB = async () => {
  // Connect to the database
  dbConnect();

  // Check if there are any existing data available
  const existingCategory = await Category.find();
  const existingProduct = await Product.find();
  const existingSubCategory = await SubCategory.find();

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
        {
          product_Name: "Product 1",
          product_Price: "10",
          category_Name: "Category 1",
          subcategory_Name: "Sub Category 1",
        },
        {
          product_Name: "Product 2",
          product_Price: "20",
          category_Name: "Category 2",
          subcategory_Name: "Sub Category 2",
        },
        {
          product_Name: "Product 3",
          product_Price: "30",
          category_Name: "Category 3",
          subcategory_Name: "Sub Category 3",
        },
      ];

      // Insert the default users into the database
      await Product.insertMany(defaultProduct);

      console.log("Default product data seeded successfully");
    } catch (error) {
      console.error(`Error seeding default product data: ${error.message}`);
    }
  }

  // Fetch categories from the database
  const categories = await Category.find();

  // If no categories exist, log an error and abort seeding subcategories
  if (categories.length === 0) {
    console.error("No categories found in the database. Aborting subcategory seeding.");
    return;
  }

  // If no data exist, seed the database with default data
  if (existingSubCategory.length === 0) {
    try {
      const defaultSubCategory = [
        { CategoryID: categories[0]._id, SubCategoryName: "Sub Category 1" },
        { CategoryID: categories[1]._id, SubCategoryName: "Sub Category 2" },
        { CategoryID: categories[2]._id, SubCategoryName: "Sub Category 3" },
      ];

      // Insert the default users into the database
      await SubCategory.insertMany(defaultSubCategory);

      console.log("Default SubCategory data seeded successfully");
    } catch (error) {
      console.error(`Error seeding default SubCategory data: ${error.message}`);
    }
  }
};

module.exports = initializeDB;
