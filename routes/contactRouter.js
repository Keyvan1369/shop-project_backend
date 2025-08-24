const express = require("express")
const{ getContact,getSingleContact,createContact,updateContact,deleteContact } = require("../controller/contactController")
const contactRouter = express.Router()

contactRouter.get("/contacts",getContact)
contactRouter.get("/contacts/:id",getSingleContact)
contactRouter.post("/contacts",createContact)
contactRouter.put("/contacts/:id",updateContact)
contactRouter.delete("/contacts/:id",deleteContact)

module.exports = contactRouter
