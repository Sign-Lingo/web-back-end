/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const router = require("express").Router();

const asl = require("../models/asl-model");

router.get("/signs", (req, res) => {
  asl
    .getKtoO()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to find the data" });
    });
});

module.exports = router;
