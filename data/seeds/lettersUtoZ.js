const letter = require('../objects/UtoZobj.js');
const tbl = 'UtoZ';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'U', image: letter.imageU},
        {letter: 'V', image: letter.imageV},
        {letter: 'W', image: letter.imageW},
        {letter: 'X', image: letter.imageX},
        {letter: 'Y', image: letter.imageY},
        {letter: 'Z', image: letter.imageZ}
      ]);
    });
};
