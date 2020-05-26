/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const tbl = 'UtoZ';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'U', image: 'https://i.postimg.cc/SNTHJg91/U-big.png'},
        {letter: 'V', image: 'https://i.postimg.cc/YCvZgQfr/V-big.png'},
        {letter: 'W', image: 'https://i.postimg.cc/W1xK7tXM/W-big.png'},
        {letter: 'X', image: 'https://i.postimg.cc/CKD2rYQ9/X-big.png'},
        {letter: 'Y', image: 'https://i.postimg.cc/JnL29vw0/Y-big.png'},
        {letter: 'Z', image: 'https://i.postimg.cc/Hx9hHzH2/Z-big.png'}
      ]);
    });
};
