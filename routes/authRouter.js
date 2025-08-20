const express = require("express")
const { login, signup, forgotPassword } = require("../controller/authController")
const authRouter = express.Router()

authRouter.post("/login",login)
authRouter.post("/signup",signup)
authRouter.post("/forgotPassword",forgotPassword)

module.exports = authRouter
