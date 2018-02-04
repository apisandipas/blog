exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.string('role').notNull().defaultTo("USER");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('role')
  });
};