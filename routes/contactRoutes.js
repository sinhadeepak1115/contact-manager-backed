const express = require("express");
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController.js");
const validateToken = require("../middleware/validateTokenHandler.js");

const router = express.Router();

router.use(validateToken);
router.route("/").get(getContacts);
router.route("/").post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
