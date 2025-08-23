const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Pname: {
     type: String,
      required: true },
  img: {
     type: String },
  price: {
     type: Number, 
     required: true },
  description: {
     type: String },
  category: {
     type: String },
  stock: { 
    type: Number,
     default: 0 },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
