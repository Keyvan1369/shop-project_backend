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
  if (!req.body.name) {
    return res.status(400).send("name is needed");
  }
  if (!req.body.email) {
    return res.status(400).send("email is needed");
  }
  if (!req.body.password) {
    return res.status(400).send("password is needed");
  }
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
