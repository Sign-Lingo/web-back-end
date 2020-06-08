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

// get user_levels table data for one user
router.get("/check/:userId", (req, res) => {
  Levels.getUserLevelsByID(req.params.userId)
    .then((userLevels) => {
      res.status(200).json(userLevels);
    })
    .catch((error) => {
      res.status(500).json("Error getting user levels!", error);
    });
});

// post new levels for a user
router.post("/:userId", (req, res) => {
  let levels = req.body.levels; // array of level ids so levels can be added [6,7,8...etc]
  console.log("LEVELS **************", levels);
  Levels.addUserLevel(req.params.userId, levels)
    .then((addedUserLevel) => {
      Levels.getUserLevelsByID(req.params.userId)
        .then((userLevels) => {
          res.status(200).json(userLevels);
        })
        .catch((error) => {
          res.status(500).json("Error getting user levels!", error);
        });
    })
    .catch((error) => {
      res.status(500).json("Error adding levels to user account!", error);
    });
});

module.exports = router;
