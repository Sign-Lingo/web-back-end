/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const tbl = 'FtoJ';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'F', image: 'https://i.postimg.cc/1XHxXMKM/F-big.png'},
        {letter: 'G', image: 'https://i.postimg.cc/2jFN08fv/G-big.png'},
        {letter: 'H', image: 'https://i.postimg.cc/P5NGfWvz/H-big.png'},
        {letter: 'I', image: 'https://i.postimg.cc/5N4dTdxr/I-big.png'},
        {letter: 'J', image: 'https://i.postimg.cc/nc3btRrh/J-big.png'}
      ]);
    });
};
