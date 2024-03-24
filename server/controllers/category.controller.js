const CategoryModel = require("../model/categoryModel");
const SubCategory = require("../model/subcategoryModel");

exports.createCategory = async (req, res) => {
  const BranchData = new CategoryModel(req.body);
  await CategoryModel.create(BranchData, function (err, product) {
    if (err) {
      return res.json({
        success: false,
        message: "Error in adding Category",
        error: err,
      });
    }
    return res.json({
      success: true,
      message: "product added successfully",
    });
  });
};
exports.getCategories = async (req, res) => {
  await CategoryModel.find({}, function (err, category) {
    if (err) {
      return res.json({
        success: false,
        message: "Error in fatching data. try again!",
        body: err,
      });
    }
    return res.json({
      success: true,
      message: "Fethced categories successfully",
      body: category,
    });
  });
};

exports.addSubcategory = async (req, res) => {
  const Category = new SubCategory(req.body);
  await SubCategory.create(Category, function (err, addBranch) {
    if (err) {
      return res.json({
        success: false,
        message: "Error in adding Category",
        error: err,
      });
    }
    return res.json({
      success: true,
      message: "product added successfully",
    });
  });
};

exports.getsubcategories = async (req, res) => {
  const Id = req.body.CategoryID;
  await SubCategory.find({ CategoryID: Id }, function (err, subcategory) {
    if (err) {
      console.log("err", err);
      return res.json({
        success: false,
        message: "Error in fatching data. try again!",
        body: err,
      });
    }
    return res.json({
      success: true,
      message: "Fethced categories successfully",
      body: subcategory,
    });
  });
};
