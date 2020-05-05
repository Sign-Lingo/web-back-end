/*
**Contributors:
**Seth Cox
**David Isakson
**
**May, 2020
*/

const router = require("express").Router();

// const Lessons = require("../models/level5-model.js");
const asl = require("../models/asl-model");


router.get("/signs", (req, res) => {
  asl
    .getUtoZ()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to find the data" });
    });
});
// router.post("/", (req, res) => {
//  const lessonData = req.body;
//
//
//  Lessons.addUser(lessonData)
//    .then((data) => {
//      res.status(201).json(data);
//   })
//    .catch((error) => {
//      res.status(500).json({ message: "Failed to create new user" });
//    });
//});

module.exports = router;