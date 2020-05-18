/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/

const router = require("express").Router();

const level5 = require("../models/level5-model");

router.get("/info/:id", (req, res) => {
  console.log(req.body, "first response")
  const id = req.params.id
  level5
    .getUser(id)
      .then(data => {
        console.log(data)
        res.status(200).json(data)
      })
      .catch(error => {
        res.status(404).json("Infomation not found : ", error)
      })
})

router.put("/update/:id", (req, res) => {
  console.log(req.body);
  const body = req.body;
  const id = req.params.id;

  if (id) {
    level5 
      .update(body, id)
      .then( user => {
        console.log(user)
        res.status(201).json({ message: "Post was updated", user})
      })
      .catch( error => {
        console.log(error)
        res.status(500).json({ message: "There was an error updating the User" })
      });
  } else {
    res.status(400).json({ message: "User was not found" });
  }
})

module.exports = router;
