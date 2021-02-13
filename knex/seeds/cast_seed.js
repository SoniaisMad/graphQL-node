const castData = require('../../data/cast');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cast').del()
    .then(function () {
      // Inserts seed entries
      return knex('cast').insert(castData);
    });
};
