/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const tbl = 'KtoO';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'K', image: 'https://i.postimg.cc/027gzkVr/K-big.png'},
        {letter: 'L', image: 'https://i.postimg.cc/xdtBZ9fT/L-big.png'},
        {letter: 'M', image: 'https://i.postimg.cc/rms7X7sG/M-big.png'},
        {letter: 'N', image: 'https://i.postimg.cc/s1dLWXcK/N-big.png'},
        {letter: 'O', image: 'https://i.postimg.cc/d3TXDd8L/O-big.png'}
      ]);
    });
};
