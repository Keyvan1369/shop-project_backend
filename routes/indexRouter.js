const express = require("express")
const { index, notFound } = require("../controller/indexController")
const indexRouter = express.Router()

indexRouter.get("/",index)
indexRouter.get("/notFound",notFound)

module.exports = indexRouter


