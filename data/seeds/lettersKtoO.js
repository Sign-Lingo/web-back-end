const letter = require('../objects/KtoOobj.js');
const tbl = 'KtoO';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: '', image: letter.},
        {letter: '', image: letter.},
        {letter: '', image: letter.},
        {letter: '', image: letter.},
        {letter: '', image: letter.}
      ]);
    });
};
