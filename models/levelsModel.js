const db = require("../data/dbconfig");

module.exports = {
  grabLevel(levelId) {
    return db("levels").where("id", levelId);
  },
  grabUserLevels(userId) {
    // trying to grab a particular users levels by
    // their user id
    return db("levels as l")
      .join("user-levels as ul", `ul.user_id`, "l.id")
      .where("ul.user_id", userId)
      .select("*");
  },
  grabAllLevels() {
    return db("levels");
  },
  addLevel(levelBody) {
    return db("levels").insert(levelBody);
  },
  addLevelToUser(userId, levelBody) {
    return db.transaction((trx) => {
      return db("levels")
        .transacting(trx)
        .insert(levelBody)
        .returning("id")
        .then((res) => {
          return db("user-levels")
            .transacting(trx)
            .insert({ user_id: userId, level_id: res[0] })
            .returning("*");
        })
        .then(trx.commit)
        .catch(trx.rollback);
    });
  },
  updateLevel(levelId, levelBody) {
    return db("levels").where("id", levelId).update(levelBody, "*");
  },
};
