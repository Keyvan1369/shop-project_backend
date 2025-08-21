const User = require("../models/User");

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send("not found");
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).send("internal error server");
  }
};
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    
    const exuser = await User.findOne({ email });
    if (exuser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.status(200).send("update successful");
  } catch (error) {
    res.status(500).send("Internal error server");
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.status(200).send("Delete successful");
  } catch (error) {
    res.status(500).send("Internal error server");
  }
};

module.exports = {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
