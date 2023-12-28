const { mongoConnect } = require('./client')
var ObjectId = require('mongodb').ObjectId;

// Add package for a given user
const addOrder = async (id, date, time, type, location, packageId, rep, rep_mobile) => {
  var o_id = new ObjectId(id)
  const query = { '_id': o_id }
  const updates = {
    "orders": {
      "type": type,
      "packageId": packageId,
      "location": location,
      "created_date": new Date().toLocaleDateString('en-US'),
      "pickup_date": date,
      "pickup_time": time,
      "service_rep": rep,
      "service_rep_mobile": rep_mobile
    }
  };

  const result = await mongoConnect("updateOne_push", query, updates)

  if (!result) return false
  return result.acknowledged
};

module.exports = {
  addOrder,
};
