
exports.up = function (knex) {
  return knex.schema
    .createTable('score', table => {      
      table.increments('id')      
      table.string('name').notNullable()
      table.integer('score').notNullable()
      table.timestamps(true, true) // created at + updated at timestamps
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('score')
};
