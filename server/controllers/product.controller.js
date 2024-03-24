const ProductModel = require("../model/productModel");

exports.createProduct = async (req, res) => {
  const ProductData = new ProductModel(req.body);
  await ProductModel.create(ProductData, function (err, Product) {
    if (err) {
      return res.json({
        success: false,
        message: "Error in adding Product",
        error: err,
      });
    }
    console.log("Product", Product);
    return res.json({
      success: true,
      message: "Product added successfully",
    });
  });
};

exports.updateProduct = async (req, res) => {
  let id = req.body.Id;
  let updateData = {
    product_Name: req.body.product_Name,
    product_Price: req.body.product_Price,
    category_Name: req.body.category_Name,
    subcategory_Name: req.body.subcategory_Name,
  };
  await ProductModel.findByIdAndUpdate(id, updateData, function (err, updated) {
    if (err) {
      console.log("error", error);
      return res.json({
        success: false,
        message: "Error in fatching Detail, please try agin",
        error: err,
      });
    }
    return res.json({
      success: true,
      message: "product updated successfully",
    });
  });
};

exports.editProducts = async (req, res) => {
  let id = req.body.Product_Id;
  await ProductModel.findById(id, function (err, editProducts) {
    if (err) {
      console.log("error", error);
      return res.json({
        success: false,
        message: "Error in fatching Detail, please try agin",
        error: err,
      });
    }
    return res.json({
      success: true,
      message: "got data for edit successfully",
      body: editProducts,
    });
  });
};

exports.deleteProduct = async (req, res) => {
  await ProductModel.findByIdAndRemove({ _id: req.params.id }, function (err, Product) {
    if (err) {
      return res.json({
        success: false,
        message: "Error in Deleting Product",
        error: err,
      });
    }
    return res.json({
      success: true,
      message: "Product deleted successfully",
    });
  });
};

exports.listProducts = async (req, res) => {
  console.log("+++++++++++++++++===");
  await ProductModel.find({}, function (err, category) {
    if (err) {
      return res.json({
        success: false,
        message: "Error in fatching lists try again!",
        body: err,
      });
    }
    return res.json({
      success: true,
      message: "Fethced Lists successfully",
      body: category,
    });
  });
};
