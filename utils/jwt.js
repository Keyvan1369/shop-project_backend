const jwt = require("jsonwebtoken");

const setToken = (payload) => {
  const token = jwt.sign(payload, "hjsdfuisdf&%$/*321045", { expiresIn: "5d" });

  return token;
};

module.exports = {
  setToken,
};
