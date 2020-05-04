const letter = require('../objects/FtoEobJ.js');
const tbl = 'FtoJ';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'F', image: letter.imageF},
        {letter: 'G', image: letter.imageG},
        {letter: 'H', image: letter.imageH},
        {letter: 'I', image: letter.imageI},
        {letter: 'J', image: letter.imageJ}
      ]);
    });
};
