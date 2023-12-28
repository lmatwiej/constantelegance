const { mongoConnect } = require('./client')
var ObjectId = require('mongodb').ObjectId;

// Update user's service packages
const updateWardrobe = async (id, new_packages) => {
  var o_id = new ObjectId(id)
  const query = { '_id': o_id }
  const updates = { "packages": new_packages };

  const result = await mongoConnect("updateOne_set", query, updates)

  if (!result) return false
  return result.acknowledged
};

module.exports = {
  updateWardrobe,
};
