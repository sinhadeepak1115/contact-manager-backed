//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  console.log("The request body is", req.body);
  res.status(201).json({ message: "Create Contact" });
};

//@desc Get indivisual contact
//@route GET /api/contact/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact of ${req.params.id}` });
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact of ${req.params.id}` });
};

//@desc Delete contact
//@route  DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact of ${req.params.id}` });
};
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
