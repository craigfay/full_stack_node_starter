
// This function will be called  when migrations run
exports.up = function(knex) {
  return knex.schema.createTable('songs', function(table) {
    table.increments('id').primary();
    table.string('title').notNull();
    table.string('author').notNull();
    table.string('lyrics').notNull();
  });
};

// This function will be called when migrations rollback
exports.down = function(knex) {
  return knex.schema.dropTable('songs');
};

