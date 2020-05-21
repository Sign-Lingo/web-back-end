/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const tbl = 'AtoE';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'A', image: 'https://i.postimg.cc/8CfWd09K/A-big.png'},
        {letter: 'B', image: 'https://i.postimg.cc/x14Mz2xN/B-big.png'},
        {letter: 'C', image: 'https://i.postimg.cc/MTkB9Y8W/C-big.png'},
        {letter: 'D', image: 'https://i.postimg.cc/bJQtW2z1/D-big.png'},
        {letter: 'E', image: 'https://i.postimg.cc/gjmZWkJQ/E-big.png'}
      ]);
    });
};
