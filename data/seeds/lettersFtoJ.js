const letter = require('../objects/FtoEobJ.js');
const tbl = 'FtoJ';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: , image: },
        {letter: , image: },
        {letter: , image: },
        {letter: , image: },
        {letter: , image: }
      ]);
    });
};
