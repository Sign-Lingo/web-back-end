const letter = require('../objects/PtoTobj.js');
const tbl = 'PtoT';

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
