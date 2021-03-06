
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.integer('user_id').notNull().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.dropColumn('user_id')
  });
};
