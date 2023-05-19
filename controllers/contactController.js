const asyncHandler = require("express-async-handler");
const Contact = require("../models/constactmodel");
// @description get all contact
//@route GET /api/contacts
//@aceess public

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Conatct.find();
  res.status(200).json(contacts);
});

// @description create new contact
//@route post /api/contacts
//@aceess public
const createContact = asyncHandler(async (req, res) => {
  console.log("the request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all filed are mandatory !");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    
  })
  res
    .status(201)
    .json(contact);
});

// @description get all contact
//@route GET /api/contacts
//@aceess public

const getcontact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.statusCode(404);
  }

  res.status(200).json({ message: `get all api contacts ${req.params.id}` });
});
// @description update contact
//@route PUT /api/contacts
//@aceess public
const updateContact = asyncHandler(async (req, res) => {
  res.status(203).json({ message: `upadate contacts  ${req.params.id}` });
});
// @description Delete contact
//@route delete /api/contacts
//@aceess public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(400).json({ message: `delete contact  ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  getcontact,
  updateContact,
  deleteContact,
};
