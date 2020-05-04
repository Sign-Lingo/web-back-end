const letter = require('../objects/PtoTobj.js');
const tbl = 'PtoT';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'P', image: letter.imageP},
        {letter: 'Q', image: letter.imageQ},
        {letter: 'R', image: letter.imageR},
        {letter: 'S', image: letter.imageS},
        {letter: 'T', image: letter.imageT}
      ]);
    });
};
