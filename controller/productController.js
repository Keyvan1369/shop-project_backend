const { Product } = require("../models/Product");


const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
const getSingleProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send("not found");
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).send("internal error server");
  }
};
const createProduct = async (req, res) => {
  const { id, Pname, img,price } = req.body;

  try {
    
    const exproduct = await Product.findOne({ Pname });
    if (exproduct) {
      return res.status(400).json({ message: "product is already in" });
    }

    const product = new Product({ id,Pname, img, price });
    await product.save();

    res.status(201).json({ message: "product created successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) {
      return res.status(404).send("product not found");
    }
    res.status(200).send("update successful");
  } catch (error) {
    res.status(500).send("Internal error server");
  }
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).send("product not found");
    }
    res.status(200).send("Delete successful");
  } catch (error) {
    res.status(500).send("Internal error server");
  }
};

module.exports = {
  getProduct,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
