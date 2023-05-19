const express = require("express");
const router = express.Router();
const {
  getContact,
  getcontact,
  updateContact,
  deleteContact,
  createContact,
} = require("../controllers/contactController");

router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getcontact).put(updateContact).delete(deleteContact);


module.exports = router;
