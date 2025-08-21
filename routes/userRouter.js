const express = require("express")
const { getUser, getSingleUser, createUser, updateUser, deleteUser} = require("../controller/userController")
const userRouter = express.Router()

userRouter.get("/users",getUser)
userRouter.get("/users/:id",getSingleUser)
userRouter.post("/users",createUser)
userRouter.put("/users/:id",updateUser)
userRouter.delete("/users/:id",deleteUser)


module.exports = userRouter


