// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const router = require("express").Router();
// const { jwtSecret } = require("../config/secret");
const OktaJwtVerifier = require("@okta/jwt-verifier");
const User = require("../models/authModel");
const ISSUER = process.env.ISSUER;

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: ISSUER,
});


router.post("/signup", (req, res) => {

  oktaJwtVerifier.verifyAccessToken(req.body.accessToken.accessToken, 'api://default')
  .then(decodedToken => {
    console.log(decodedToken.claims.uid)
    User.findByOktaUID(decodedToken.claims.uid)
      .then(foundit => {
        console.log("$$$$$$$$$$$$$", foundit)
        if (foundit.length === 0) {
          User.addUser(decodedToken.claims.uid)
            .then(addedUser => {
              res.status(201).json({
                newUser: addedUser,
                addedThem: "We added a user!",
              })
            })
        } else {
          res.status(200).json({
            foundUser: true,
            userFound: "Found the user already in users table",
            foundit       
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          error: err.message,
          error2: "could not find okta uid",
          uid: decodedToken.claims.uid
        })
      });
  })
  .catch(err => {
    // a validation failed, inspect the error
    res.status(500).json({
      message: `Json verify didn't work`,
      err: err.message
    })
  });
})


module.exports = router;
