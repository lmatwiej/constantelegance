const express = require("express");
const router = express.Router();
const data = require("../data/orders");

// Create an order
router.post("/:id", async (req, res) => {
  const { service, package, status, location, date, time } = req.body;
  const id = req.params.id;

  var service_rep = "To Be Assigned"
  var service_rep_mobile = "To Be Assigned"
  const result = await data.addOrder(id, service, package, status, location, date, time, service_rep, service_rep_mobile);
  if (!result) return res.status(500).send("Server Error");
  res.status(201).send({ service_rep, service_rep_mobile });
});

module.exports = router;
