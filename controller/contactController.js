const Contact = require("../models/Contact");

const getContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const getSingleContact = async (req, res) => {
  const id = req.params.id;
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const createContact = async (req, res) => {
  const { email, subject, message } = req.body;
  try {
    if (!email || !email.includes("@")) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const excontact = await Contact.findOne({ email });
    if (excontact) {
      return res.status(409).json({ message: "Contact already exists" });
    }

    const contact = new Contact({ email, subject, message });
    await contact.save();

    res.status(201).json({ message: "Contact created successfully", contact });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateContact = async (req, res) => {
  const id = req.params.id;
  try {
    const contact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!contact) {
      return res.status(404).json({ message: "Contact does not exist" });
    }
    res.status(200).json({ message: "Contact updated", contact });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteContact = async (req, res) => {
  const id = req.params.id;
  try {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "Contact deleted", contact });
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
