const db = require("../database/dbConfig.js");

const AtoEtbl = "AtoE"; //define table name
const FtoJtbl = "FtoJ";
const KtoOtbl = "KtoO";
const PtoTtbl = "PtoT";
const UtoZtbl = "UtoZ";

module.exports = {
  findAtoE,
  findFtoJ,
  findKtoO,
  findPtoT,
  findUtoZ
};

function findAtoE() {
  return db(tbl).select("id", "letter", "image");
}

function findFtoJ() {
  return db(tbl).select("id", "letter", "image");
}

function findKtoO() {
  return db(tbl).select("id", "letter", "image");
}

function findPtoT() {
  return db(tbl).select("id", "letter", "image");
}

function findUtoZ() {
  return db(tbl).select("id", "letter", "image");
}
// function findBy(filter) {
//   return db(tbl).where(filter);
// }

// async function add(user) {
//   const [id] = await db(tbl).insert(user);

//   return findById(id);
// }

// function findById(id) {
//   return db(tbl)
//     .where({ id })
//     .first();
// }
