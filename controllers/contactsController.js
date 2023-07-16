import Contact from "../models/contactModel.js";

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if (!contact)
      res
        .status(404)
        .json({ message: `Cannot be found any product with ID of ${id}` });

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).send(contact);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const editContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndUpdate(id, req.body);

    if (!contact)
      res
        .status(404)
        .json({ message: `Cannot be found any product with ID of ${id}` });

    const updatedContact = await Contact.findById(id);
    res.status(202).json(updatedContact);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact)
      res
        .status(404)
        .json({ message: `Cannot be found any product with ID of ${id}` });

    const updatedContact = await Contact.find();
    res.status(202).json(updatedContact);
  } catch (error) {
    res.status(500).send(error.message);
  }
  res.status(202).send(`Contact deleted is ${req.params.id}`);
};

const contactsController = {
  getContacts,
  getContact,
  createContact,
  editContact,
  deleteContact,
};

export default contactsController;
