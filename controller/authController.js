const User = require("../models/User");

const login = (req, res) => {
  /* console.log(req.body.password); */
  if (!req.body.password) {
    return res.status(400).send("need password");
  }
  if (!req.body.email) {
    return res.status(400).send("need email");
  }

  res.status(200).send("login successful");
};
const signup = (req, res) => {
  const { username, email, password } = req.body;

  if (!username) return res.status(400).send("username is needed");
  if (!email) return res.status(400).send("email is needed");
  if (!password) return res.status(400).send("password is needed");

  if (!email.includes("@")) {
    return res.status(400).send("invalid email");
  }

  const user = User({
    username,
    email,
    password
  })
  user.save()

  res.status(200).send("signup successful");
};

const forgotPassword = (req, res) => {
  res.send("forgotPassword");
};

module.exports = {
  login,
  signup,
  forgotPassword,
};
