
exports.up = function(knex) {
    return knex.schema
        .createTable('user', function (table) {
            table.increments('id').primary();
            table.string('name', 32).notNullable();
            table.string('email', 256).notNullable();
            table.string('password', 32).notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('user');
};
