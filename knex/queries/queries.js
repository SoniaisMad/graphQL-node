const knex = require('../connect');

function getCast(filters) {
  return knex('cast')
  .select('*')
  .where(filters);
}

function addSomeone(cast) {
    return knex('cast')
    .insert({
      firstName: cast.firstName,
      lastName: cast.lastName,
      Food: cast.Food
    })
    .returning('*');
}

module.exports = {
  getCast,
  addSomeone
};