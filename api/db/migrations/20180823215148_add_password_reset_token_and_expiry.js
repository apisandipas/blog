
exports.up = function (knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.string('password_reset_token')
    table.string('password_reset_expires')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('password_reset_token')
    table.dropColumn('password_reset_expires')
  })
}
