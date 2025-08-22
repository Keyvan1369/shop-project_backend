const express = require("express")
const { getProduct, getSingleProduct, createProduct, updateProduct, deleteProduct} = require("../controller/productController")
const productRouter = express.Router()

productRouter.get("/products",getProduct)
productRouter.get("/products/:id",getSingleProduct)
productRouter.post("/Products",createProduct)
productRouter.put("/products/:id",updateProduct)
productRouter.delete("/products/:id",deleteProduct)


module.exports = productRouter


