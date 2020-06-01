const db = require("../data/dbconfig");

module.exports = {
  grabLevel(levelId) {
    return db("levels").where("id", levelId);
  },
  grabAllLevels() {
    return db("levels");
  },
  addLevel(levelBody) {
    return db("levels").insert(levelBody);
  },
  updateLevel(levelId, levelBody) {
    return db("levels").where("id", levelId).update(levelBody, "*");
  },
};
