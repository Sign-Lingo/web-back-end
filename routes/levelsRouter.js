const router = require("express").Router();
const Levels = require("../models/levelsModel");

// get all levels in the database, includes the level id and name fields.
router.get("/", (req, res) => {
  Levels.getAllLevels()
    .then((levels) => {
      res.status(200).json(levels);
    })
    .catch((error) => {
      res.status(500).json("Error getting all levels!", error);
    });
});

// get user_levels table data for one user by their okta_uid
router.get("/:oktaUID", (req, res) => {
  Levels.getUserLevelsByOktaUID(req.params.oktaUID)
    .then((userLevels) => {
      res.status(200).json(userLevels);
    })
    .catch((error) => {
      res.status(500).json("Error getting user levels!", error);
    });
});

// This end point will only be used if a user logs in and the front end client notices
// that the user is missing levels that have been added since they logged in last time.
// this endpoint will add the missing levels to the user.
router.post("/:oktaUID", (req, res) => {
  let levels = req.body.levels; // array of level ids so levels can be added [6,7,8...etc]
  Levels.addUserLevel(req.params.oktaUID, levels)
    .then((addedUserLevel) => {
      Levels.getUserLevelsByOktaUID(req.params.oktaUID)
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
