const letter = require('../objects/AtoEobj.js');
const tbl = 'AtoE';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'A', image: letter.imageA},
        {letter: 'B', image: letter.imageB},
        {letter: 'C', image: letter.imageC},
        {letter: 'D', image: letter.imageD},
        {letter: 'E', image: letter.imageE}
      ]);
    });
};
