
exports.up = function(knex) {
    return knex.schema
        .createTable('reaction', function (table) {
            table.integer('userId').notNullable();
            table.integer('postId').notNullable();
            table.string('reactionType', 256).notNullable();
            table.primary(['userId', 'postId', 'reactionType'])

            table.foreign('userId').references('id').inTable('user');
            table.foreign('postId').references('id').inTable('post');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('reaction');
};
