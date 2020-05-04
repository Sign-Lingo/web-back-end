const db = require("../data/dbconfig.js");

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
  return db(AtoEtbl).select("id", "letter", "image");
}

function getFtoJ() {
  return db(FtoJtbl).select("id", "letter", "image");
}

function getKtoO() {
  return db(KtoOtbl).select("id", "letter", "image");
}

function getPtoT() {
  return db(PtoTtbl).select("id", "letter", "image");
}

function getUtoZ() {
  return db(UtoZtbl).select("id", "letter", "image");
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
