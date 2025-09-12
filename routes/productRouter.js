const express = require("express");
const {
  getProduct,
  searchProduct,   
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

const productRouter = express.Router();

productRouter.get("/products", getProduct);
productRouter.post("/products/search", searchProduct);  
productRouter.get("/products/:id", getSingleProduct);
productRouter.post("/products", createProduct);
productRouter.put("/products/:id", updateProduct);
productRouter.delete("/products/:id", deleteProduct);

module.exports = productRouter;
