const mongoose = require("mongoose");
const SubCategory = require("./subcategoryModel");

const ProductSchema = new mongoose.Schema({
  product_Name: {
    type: String,
    required: [true, "Product_name name is required"],
  },
  product_Price: {
    type: String,
    required: [true, "product_price name is required"],
  },
  category_Name: {
    type: String,
  },
  subcategory_Name: {
    type: String,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
