const express = require("express");
const router = express.Router();
const Joi = require("joi");
const data = require("../data/users");
const validateWith = require("../middleware/validation");

// Various schema defined for various endpoints
const accountSchema = {
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5)
};

const contactSchema = {
  email: Joi.string().email().required(),
  mobile: Joi.string().required()
};

const locationSchema = {
  address: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zip: Joi.string().required()
};


// Create new user account with name, email, password. Other values left blank
router.post("/", validateWith(accountSchema), async (req, res) => {
  const { name, email, password } = req.body;
  const existing_user = await data.getUserByEmail(email);
  if (existing_user)
    return res
      .status(400)
      .send({ error: "A user with the given email already exists." });

  const result = await data.addUser(name, email, password);

  if (!result) return res.status(500).send("Server Error");
  res.status(201).send(result);
});


// Update contact info (email and mobile) for a given user ID
router.put("/contact/:id", validateWith(contactSchema), async (req, res) => {
  const { email, mobile } = req.body;
  const id = req.params.id;
  const existing_user = await data.getUserByEmail(email);

  if (existing_user && existing_user._id.toString() !== id)
    return res
      .status(400)
      .send({ error: "Email is already taken." });

  const result = await data.updateContact(id, email, mobile);
  if (!result) return res.status(500).send("Server Error");
  res.status(201).send("Success");
});


// Update location info (address, city, state, zip) for a given user ID
router.put("/location/:id", validateWith(locationSchema), async (req, res) => {
  const { address, city, state, zip } = req.body;
  const id = req.params.id;

  const result = await data.updateHomeLocation(id, address, city, state, zip);
  if (!result) return res.status(500).send("Server Error");
  res.status(201).send("Success");
});


// Returns all user info (name, contact, location)
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await data.getUserById(id)
  if (!user) return res.status(400).send({ error: "No account found." });
  res.send(user);
});


module.exports = router;
