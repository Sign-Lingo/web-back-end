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
  Levels.checkUserLevels(req.params.userId)
    .then((userLevels) => {
      res.status(200).json(userLevels);
    })
    .catch((error) => {
      res.status(500).json("Error getting user levels!", error);
    });
});

// post one new level (by level ID) for one user (by user ID)
router.post("/:userId", (req, res) => {
  let levelId = req.body;
  Levels.addUserLevel(req.params.userId, levelId)
    .then(addedUserLevel => {
      res.status(200).json(addedUserLevel);
    })
    .catch(error => {
      res.status(500).json("Error adding level to user account!", error)
    })
})

module.exports = router;
