exports.up = (knex) => Promise.all([
    knex.schema.createTable('cast', function(table) {
        table.increments();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('food').notNullable();
    })
]);
  
exports.down = (knex) => {
return knex.schema.dropTable('cast');
};
