
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('createdAt');
    table.dropColumn('updatedAt');
  });
};
