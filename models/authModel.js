const db = require("../data/dbconfig");

module.exports = {
  addUser(newUser) {
    return db("users").insert(newUser, "*");
  },
  findByEmail(email) {
    return db("users").where(email);
  },
};
