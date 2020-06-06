const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { jwtSecret } = require("../config/secret");
const User = require("../models/authModel");

function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
  };
  const options = {
    expiresIn: "7d",
  };
  return jwt.sign(payload, jwtSecret, options);
}

// ROUTES TO REGISTER AND LOGIN
router.post("/register", (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const password = hash;
  const email = req.body.email;
  User.addUser({ ...req.body, password: password })
    .then(() => {
      User.findByEmail({ email })
        .first()
        .then((user) => {
          if (user && password === user.password) {
            const token = generateToken(user);
            res.status(200).json({
              message: `Welcome, ${user.email}.`,
              id: user.id,
              email: user.email,
              token,
            });
          } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({
              message: `Welcome, ${user.email}.`,
              id: user.id,
              email: user.email,
              token,
            });
          } else {
            res.status(401).json({ message: "Invalid credentials." });
          }
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    })
    .catch((error) => {
      res.status(500).json({
        errorMessage: error.message,
        error: "Could not add the user to sign lingo.",
        error,
      });
    });
});

router.post("/login", (req, res) => {
  let { email, password } = req.body;
  User.findByEmail({ email })
    .first()
    .then((user) => {
      if (user && password === user.password) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome, ${user.email}.`,
          id: user.id,
          email: user.email,
          token,
        });
      } else if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome, ${user.email}.`,
          id: user.id,
          email: user.email,
          token,
        });
      } else {
        res.status(401).json({ message: "Invalid credentials." });
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
