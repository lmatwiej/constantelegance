const { mongoConnect } = require('./client')
var ObjectId = require('mongodb').ObjectId;


const getUserById = async (id) => {
  var o_id = new ObjectId(id)
  const query = { '_id': o_id }
  const user = await mongoConnect("findOne", query)

  if (!user) return false
  return user
};


const getUserByEmail = async (email) => {
  const query = { 'contact.email': email }
  const user = await mongoConnect("findOne", query)

  if (!user) return false
  return user
}


const addUser = async (email, password, name, mobile, address, city, state, zip) => {
  const newAccount = {
    name,
    password,
    contact: {
      email,
      mobile
    },
    home: {
      address,
      city,
      state,
      zip
    },
    other_locations: [],
    packages: [],
    orders: [],
    eligibility: {
      "Alterations": true,
      "Cleaning": true,
      "Donations": true,
      "Exchanges": true
    }
  }
  const result = await mongoConnect("insertOne", newAccount)

  if (!result) return false
  return result.insertedId.toString()
};


const updateContact = async (id, email, mobile) => {
  var o_id = new ObjectId(id)
  const query = { '_id': o_id }
  const updates = { "contact.email": email, "contact.mobile": mobile, }
  const result = await mongoConnect("updateOne_set", query, updates)

  if (!result) return false
  return result.acknowledged
}

const updateHomeLocation = async (id, address, city, state, zip) => {
  var o_id = new ObjectId(id)
  const query = { '_id': o_id }
  const updates = { "home": { address, city, state, zip } }
  const result = await mongoConnect("updateOne_set", query, updates)

  if (!result) return false
  return result.acknowledged
}

const addLocation = async (id, label, address, city, state, zip) => {
  var o_id = new ObjectId(id)
  const query = { '_id': o_id }
  const updates = { "other_locations": { label, address, city, state, zip } }
  const result = await mongoConnect("updateOne_push", query, updates)

  if (!result) return false
  return result.acknowledged
}


module.exports = {
  getUserByEmail,
  getUserById,
  addUser,
  updateContact,
  updateHomeLocation,
  addLocation
};
