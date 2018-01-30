
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.string('slug').nullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.dropColumn('slug')
  });
};
