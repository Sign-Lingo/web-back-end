const db = require("../data/dbconfig");

module.exports = {
  getAllLevels() {
    return db("levels");
  },
  checkUserLevels(userId) {
    return db("user_levels")
      .where("user_id", userId)
      .select("*");
  },
};
