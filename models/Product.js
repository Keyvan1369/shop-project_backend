import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  Pname: { 
    type: String, 
    required: true 
},
  img: { 
    type: String,
     required: true 
    }, 
  price: { 
    type: Number,
     required: true
     },
  
  description: {
     type: String
     },
  category: { 
    type: String
 },
  stock: {
     type: Number,
      default: 0 },
});

export const Product = mongoose.model("Product", productSchema);
