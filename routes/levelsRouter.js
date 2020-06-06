const router = require("express").Router();
const Levels = require("../models/levelsModel");

// get all levels
router.get("/", (req, res) => {
  Levels.getAllLevels()
    .then((levels) => {
      res.status(200).json(levels);
    })
    .catch((error) => {
      res.status(500).json("Error getting all levels!", error);
    });
});

router.get("/check", (req, res) => {
  Levels.checkUserLevels()
    .then((userLevels) => {
      res.status(200).json(userLevels);
    })
    .catch((error) => {
      res.status(500).json("Error getting user levels!", error);
    });
});

module.exports = router;
