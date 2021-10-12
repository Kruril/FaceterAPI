
exports.up = function(knex) {
    return knex.schema
        .createTable('post', function (table) {
            table.increments('id').primary();
            table.integer('respond');
            table.integer('author').notNullable();
            table.enum('type', ['text', 'image', 'link']).notNullable();
            table.string('content', 320).notNullable();
            table.datetime('date').notNullable();

            table.foreign('author').references('id').inTable('user');
            table.foreign('respond').references('id').inTable('post');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('post');
};
