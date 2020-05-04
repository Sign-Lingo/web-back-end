const db = require("../database/dbConfig.js");

const AtoEtbl = "AtoE"; //define table name
const FtoJtbl = "FtoJ";
const KtoOtbl = "KtoO";
const PtoTtbl = "PtoT";
const UtoZtbl = "UtoZ";

module.exports = {
  getAtoE,
  getFtoJ,
  getKtoO,
  getPtoT,
  getUtoZ
};

function getAtoE() {
  return db(tbl).select("id", "letter", "image");
}

function getFtoJ() {
  return db(tbl).select("id", "letter", "image");
}

function getKtoO() {
  return db(tbl).select("id", "letter", "image");
}

function getPtoT() {
  return db(tbl).select("id", "letter", "image");
}

function getUtoZ() {
  return db(tbl).select("id", "letter", "image");
}
// function getBy(filter) {
//   return db(tbl).where(filter);
// }

// async function add(user) {
//   const [id] = await db(tbl).insert(user);

//   return getById(id);
// }

// function getById(id) {
//   return db(tbl)
//     .where({ id })
//     .first();
// }
