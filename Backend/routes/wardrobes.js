const express = require("express");
const router = express.Router();
const data = require("../data/wardrobes");

// Add package to user's wardrobe
router.post("/:id", async (req, res) => {
  const { new_packages } = req.body;
  const id = req.params.id;

  const result = await data.updateWardrobe(id, new_packages);
  if (!result) return res.status(500).send("Server Error");
  res.status(201).send("Success");
});

module.exports = router;
