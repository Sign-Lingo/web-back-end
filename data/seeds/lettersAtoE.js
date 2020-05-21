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
        {letter: 'A', image: 'https://i.postimg.cc/sDw52zCS/the-letter-a-displayed-in-american-sign-language.jpg'},
        {letter: 'B', image: 'https://i.postimg.cc/sgx7QL3L/the-letter-b-displayed-in-american-sign-language.jpg'},
        {letter: 'C', image: 'https://i.postimg.cc/TwMDsYn8/the-letter-c-displayed-in-american-sign-language.jpg'},
        {letter: 'D', image: 'https://i.postimg.cc/fRPXxvLR/the-letter-d-displayed-in-american-sign-language.jpg'},
        {letter: 'E', image: 'https://i.postimg.cc/63rvxJh8/the-letter-e-displayed-in-american-sign-language.jpg'}
      ]);
    });
};
