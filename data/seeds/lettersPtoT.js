/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const tbl = 'PtoT';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'P', image: 'https://i.postimg.cc/BnnnH7tr/P-big.png'},
        {letter: 'Q', image: 'https://i.postimg.cc/XY178KCp/Q-big.png'},
        {letter: 'R', image: 'https://i.postimg.cc/nLsVws4T/R-big.png'},
        {letter: 'S', image: 'https://i.postimg.cc/DztfV25h/S-big.png'},
        {letter: 'T', image: 'https://i.postimg.cc/j5PxtGk7/T-big.png'}
      ]);
    });
};
