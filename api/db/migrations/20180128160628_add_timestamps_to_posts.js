
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.dateTime('created_at').notNull();
    table.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
  });
};
