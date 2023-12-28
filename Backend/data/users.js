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


const addUser = async (name, email, password) => {
  const newAccount = { name, password, contact: { email, mobile: "" }, location: { address: "", city: "", state: "", zip: "" }, packages: [] }
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


const updateLocation = async (id, address, city, state, zip) => {
  var o_id = new ObjectId(id)
  const query = { '_id': o_id }
  const updates = { "location": { "address": address, "city": city, "state": state, "zip": zip } }
  const result = await mongoConnect("updateOne_set", query, updates)

  if (!result) return false
  return result.acknowledged
}


module.exports = {
  getUserByEmail,
  getUserById,
  addUser,
  updateContact,
  updateLocation
};
