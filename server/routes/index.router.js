const express = require("express"),
  router = express.Router();

const productController = require("../controllers/product.controller");
const categoryController = require("../controllers/category.controller");

router.post("/createCategory", categoryController.createCategory);
router.post("/addSubcategory", categoryController.addSubcategory);
router.get("/getCategories", categoryController.getCategories);
router.post("/getsubcategories", categoryController.getsubcategories);

router.post("/createProduct", productController.createProduct);
router.put("/updateProduct", productController.updateProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);
router.post("/editProducts", productController.editProducts);
router.get("/listProducts", productController.listProducts);

module.exports = router;
