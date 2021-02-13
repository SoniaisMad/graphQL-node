module.exports = {
  development: {
   client: 'pg',
   connection: 'postgres://USER:PASSWORD@localhost:5432/friends',
   migrations: {
       directory: __dirname + '/knex/migrations',
     },
     seeds: {
       directory: __dirname + '/knex/seeds'
     }
  }
 };
