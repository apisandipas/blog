
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', function(t) {
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('products', function(t) {
    t.dropColumn('createdAt');
    t.dropColumn('updatedAt');
  });
};
