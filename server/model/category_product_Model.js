const mongoose = require("mongoose");

// Define Category Schema
const categorySchema = new mongoose.Schema({
  name: String,
  parentId: mongoose.Schema.Types.ObjectId,
  subcategories: [mongoose.Schema.Types.ObjectId],
});
const Category = mongoose.model("Category", categorySchema);

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  categories: [mongoose.Schema.Types.ObjectId],
});
const Product = mongoose.model("Product", productSchema);

module.exports = { Category, Product };
