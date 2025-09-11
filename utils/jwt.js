const jwt = require("jsonwebtoken");

const setToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5d" });
  return token;
};

module.exports = { setToken };
