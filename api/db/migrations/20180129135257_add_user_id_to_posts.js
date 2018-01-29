
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.integer('user_id').notNull()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.dropColumn('user_id').references('users.id')
  });
};
