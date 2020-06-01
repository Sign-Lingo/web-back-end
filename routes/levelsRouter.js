const router = require("express").Router();
const Levels = require("../models/levelsModel");

// get level by level id
router.get("/:levelId", (req, res) => {
  Levels.grabLevel(req.params.levelId)
    .then((level) => {
      res.status(200).json(level);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error getting level by id.", error });
    });
});

// get all levels
router.get("/", (req, res) => {
  Levels.grabAllLevels()
    .then((levels) => {
      res.status(200).json(levels);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error getting all levels", error });
    });
});

// get levels of user by userId
router.get("/:userId", (req, res) => {
  Levels.grabUserLevels(req.params.userId)
    .then((levels) => {
      res.status(200).json(levels);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error getting all user levels", error });
    });
});

// add level
router.post("/", (req, res) => {
  Levels.addLevel(req.body)
    .then((level) => {
      res.status(201).json(level);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error adding level.", error });
    });
});

// add level to a user account
router.post("/:userId", (req, res) => {
    Levels.addLevelToUser(req.body)
      .then((level) => {
        res.status(201).json(level);
      })
      .catch((error) => {
        res.status(500).json({ error: "Error adding level.", error });
      });
  });

// edit flashcard, practice, or quiz timestamps in level
router.put("/:levelId", (req, res) => {
  Levels.updateLevel(req.params.levelId, req.body)
    .then((level) => {
      res.status(200).json(level);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Error updating level by level id.", error });
    });
});

module.exports = router;
