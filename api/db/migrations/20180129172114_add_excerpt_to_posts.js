
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.text('excerpt').notNull()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.dropColumn('excerpt')
  });
};
