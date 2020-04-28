const { check, validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  //Check that a valid email is entered and pw length is at least 8 chars long
  [check("email").isEmail, check("password").isLength({ min: 8 })];

  const errors = validationResult(req);

  //If there are errors return the errors otherwise continue
  !errors.isEmpty() ? res.status(422).json({ errors: errors.array() }) : next();
};

//Contributor: David Isakson