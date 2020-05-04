const letter = require('../objects/KtoOobj.js');
const tbl = 'KtoO';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'K', image: letter.imageK},
        {letter: 'L', image: letter.imageL},
        {letter: 'M', image: letter.imageM},
        {letter: 'N', image: letter.imageN},
        {letter: 'O', image: letter.imageO}
      ]);
    });
};
