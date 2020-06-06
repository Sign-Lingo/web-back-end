const db = require("../data/dbconfig");

module.exports = {
  getAllLevels() {
    return db("levels");
  },
};
