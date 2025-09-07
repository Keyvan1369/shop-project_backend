const User = require("../models/User");
const { generateHashPass, verifyPass } = require("../utils/hashPassword");
const { setToken } = require("../utils/jwt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!password) {
      return res.status(400).send("need password");
    }
    if (!email) {
      return res.status(400).send("need email");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("email or password is not correct");
    }
    const token = setToken({ email, username: user.username, role: user.role });
    console.log(token);

    const verifyPassword = await verifyPass(password, user.password);

    if (!verifyPassword) {
      return res.status(400).send("email or password is not correct");
    }

    res.status(200).send({ token, user: {
        username: user.username,
        email: user.email,
        role: user.role,
      },});
  } catch (error) {
    res.status(500).send("Internal sever error");
  }
};

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username) return res.status(400).send("username is needed");
    if (!email) return res.status(400).send("email is needed");
    if (!password) return res.status(400).send("password is needed");

    if (!email.includes("@")) {
      return res.status(400).send("invalid email");
    }

    const user1 = await User.findOne({ email });
    if (user1) {
      return res.status(400).send("This email is already used");
    }
    const user2 = await User.findOne({ username });
    if (user2) {
      return res.status(400).send("This username is already used");
    }
    const hashPass =  generateHashPass(password, saltRounds=10);

    const user = User({
      username,
      email,
      password: hashPass,
      role: "user",
    });
    await user.save();

    res.status(200).send("signup successful");
  } catch (error) {
    res.status(500).send("Internal server Error");
  }
};
const forgotPassword = (req, res) => {
  res.send("forgotPassword");
};

module.exports = {
  login,
  signup,
  forgotPassword,
};
