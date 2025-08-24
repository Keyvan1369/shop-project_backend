const Contact = require("../models/Contact");

const getContact = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).send("Internal error server");
  }
};
const getSingleContact = async (req, res) => {
  id = req.params.id;
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      res.status(404).json({ message: "not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const createContact = async (req, res) => {
  const { email } = req.body; ///email is required in model
  try {
    const excontact = await Contact.findOne({ email });
    if (excontact) {
      res.status(404).json({ message: "alread exist" });
    }
    const contact = new Contact({ email, subject, message });
    await contact.save();

    res.status(201).json({ message: "contact create successfully" }, contact);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateContact = async (req, res) => {
  id = req.params.id;
  try {
    const contact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!contact) {
      res.status(404).json({ message: "the contact is not exist" });
    }
    res.status(200).json({ message: "contact Updated" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteContact = async (req, res) => {
  id = req.params.id;
  try {
    const contact = await Contact.findOneAndDelete(id);
    if (!contact) {
      res.status(404).json({ message: "not found" });
    }
    res.status(200).json({ message: "delete is done" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
};
