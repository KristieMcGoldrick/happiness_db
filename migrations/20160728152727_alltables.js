
exports.up = function(knex, Promise) {
  return knex.schema.createTable('account', function (table) {
    table.increments();
    table.string('name');
    table.string('username');
    table.string('password')
  }).then(function() {
    return knex.schema.createTable('event', function (table) {
      table.increments();
      table.string('date');
      table.string('rating');
      table.text('description');
      table.integer('account_id').references('id').inTable('account').onDelete('cascade')
    });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('event')
  .then(function() {
    return knex.schema.dropTableIfExists('account');
  });
};
