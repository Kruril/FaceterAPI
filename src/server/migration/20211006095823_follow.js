
exports.up = function(knex) {
    return knex.schema
        .createTable('follow', function (table) {
            table.integer('followerId').notNullable();
            table.integer('followedId').notNullable();
            table.primary(['followerId', 'followedId']);

            table.foreign('followerId').references('id').inTable('user');
            table.foreign('followedId').references('id').inTable('user');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('follow');
};
