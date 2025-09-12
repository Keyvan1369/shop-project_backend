const Product = require("../models/Product"); 

const getProduct = async (req, res) => {
  try {
    const { Pname, id } = req.query;
    const filter = {};
    if (Pname) filter.Pname = { $regex: Pname, $options: "i" };
    if (id) filter.id = id;

    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const searchProduct = async (req, res) => {
  try {
    const { id, Pname } = req.body;
    const filter = {};
    if (Pname) filter.Pname = { $regex: Pname, $options: "i" };
    if (id) filter.id = id;

    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { Pname, img, price, description, category, stock } = req.body;

    if (!Pname || !price) {
      return res.status(400).json({ message: "Pname and price are required" });
    }

    const exproduct = await Product.findOne({ Pname });
    if (exproduct) return res.status(400).json({ message: "Product already exists" });

    const product = new Product({
      Pname,
      img: img || "",
      price,
      description: description || "",
      category: category || "",
      stock: stock || 0,
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Update successful", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Delete successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getProduct,
  searchProduct,   
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
