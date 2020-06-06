const db = require("../data/dbconfig");

module.exports = {
  addUser(newUser) {
    return db("users").insert(newUser, "*");
    // return db.transaction((trx) => {
    //   return db("users")
    //     .transacting(trx)
    //     .insert(newUser)
    //     .then((res) => {
    //       return db("user-levels")
    //         .transacting(trx)
    //         .insert({ user_id: userId, level_id: res[0] })
    //         .returning("*");
    //     })
    //     .then(trx.commit)
    //     .catch(trx.rollback);
    // });
  },
  findByEmail(email) {
    return db("users").where(email);
  },
};