
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.text('password_digest').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('password_digest');
  });
};
