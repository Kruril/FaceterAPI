const knex = require('../connection');


function getUsers(filters) {
    return knex
        .queryBuilder()
        .select('*')
        .where(filters)
        .from('user');
}

function getPosts(filters) {
    return knex
        .queryBuilder()
        .select('*')
        .where(filters)
        .from('post');
}

function getReactions(filters) {
    return knex
        .queryBuilder()
        .select('*')
        .where(filters)
        .from('reaction');
}

function getFollow(filters) {
    return knex
        .queryBuilder()
        .select('*')
        .where(filters)
        .from('follow');
}


module.exports = {
    getUsers,
    getPosts,
    getReactions,
    getFollow
}