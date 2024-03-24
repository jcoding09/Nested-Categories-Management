const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema({
  CategoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  SubCategoryName: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("SubCategory", SubCategorySchema);
