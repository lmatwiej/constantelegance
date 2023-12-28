const express = require("express");
const router = express.Router();
const data = require("../data/orders");

// Create an order
router.post("/:id", async (req, res) => {
  const { date, time, type, location, packageId } = req.body;
  const id = req.params.id;

  var rep = "To Be Assigned"
  var rep_mobile = "To Be Assigned"
  const result = await data.addOrder(id, date, time, type, location, packageId, rep, rep_mobile);
  if (!result) return res.status(500).send("Server Error");
  res.status(201).send({ rep, rep_mobile });
});

module.exports = router;
