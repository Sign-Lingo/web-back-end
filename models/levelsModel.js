const db = require("../data/dbconfig");

module.exports = {
  getAllLevels() {
    return db("levels");
  },
  getUserLevelsByID(userId) {
    return db("user_levels")
      .where("user_id", userId)
      .select("*");
  },
  addUserLevel(userId, levels) {
    for (let i = 0; i < levels.length; i++) {
      db("user_levels").insert({
        user_id: userId,
        level_id: levels[i],
      });
    };
    return getUserLevelsByID(userId);
  },
};
