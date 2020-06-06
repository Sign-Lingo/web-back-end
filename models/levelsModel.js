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
  addUserLevel(userId, levelId) {
    return db("user_levels")
      .insert({
        user_id: userId,
        level_id: levelId,
      })
  }
};
