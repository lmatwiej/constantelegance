const { mongoConnect } = require('./client')
var ObjectId = require('mongodb').ObjectId;

// Add package for a given user
const addOrder = async (id, service, package, status, location, date, time, service_rep, service_rep_mobile) => {
  var o_id = new ObjectId(id)
  const query = { '_id': o_id }
  const orderUpdates = { "orders": { service, package, status, location, date, time, service_rep, service_rep_mobile } };
  const fieldName = "eligibility." + service
  const eligibilityUpdates = { fieldName: false }

  const result1 = await mongoConnect("updateOne_push", query, orderUpdates)
  if (!result1) return false

  const result2 = await mongoConnect("updateOne_set", query, eligibilityUpdates)
  if (!result2) return false

  return result1.acknowledged
};

module.exports = {
  addOrder,
};
