const db = require("../data/dbconfig");

module.exports = {
  getUserLevelsByOktaUID,
getAllLevels,
addUserLevel,
};

function getAllLevels() {
  return db("levels");
}

function getUserLevelsByOktaUID(oktaUID) {
  return db("user_levels")
    .where("okta_uid", oktaUID)
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