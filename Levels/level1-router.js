/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const router = require("express").Router();

const level1 = require("../models/level1-model");

router.put("/level_1", (req, res) => {
  level1
    .addUser()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to find the data" });
    });
});

module.exports = router;
