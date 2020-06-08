const db = require("../data/dbconfig");

module.exports = {
getUserLevelsByID,
getAllLevels,
addUserLevel,
};

function getAllLevels() {
  return db("levels");
}

function getUserLevelsByID(userId) {
  return db("user_levels")
    .where("user_id", userId)
    .select("*");
}

function addUserLevel(userId, levels) {
  let promises = [];
  for (let i = 0; i < levels.length; i++) {
    promises.push(db("user_levels").insert({
      user_id: userId,
      level_id: levels[i],
    }));
  };
  return Promise.all(promises)
}