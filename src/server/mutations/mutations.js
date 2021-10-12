const knex = require('../connection');

function addUser(filters) {
    return knex
        .from('user')
        .returning('*', {includeTriggerModifications: true})
        .insert(filters)
        .then(user => {
            return user[0];
        });
}

function updateUser(filters) {
    return knex
        .from('user')
        .returning('*', {includeTriggerModifications: true})
        .where('id', filters.id)
        .update(filters)
        .then( user => {
            return user[0]
        })
}

function delUser(filters) {
    return knex
        .from('user')
        .returning('*', {includeTriggerModifications: true})
        .where(filters)
        .del()
        .then( user => {
            return user[0]
        })
}


function addPost(filters) {
    return knex
        .from('post')
        .returning('*', {includeTriggerModifications: true})
        .insert(filters)
        .then( post => {
            return post[0];
        })
}

function delPost(filters) {
    return knex
        .from('post')
        .returning('*', {includeTriggerModifications: true})
        .where(filters)
        .del()
        .then( post => {
            return post[0]
        })
}

module.exports = {
    addUser,
    updateUser,
    delUser,
    addPost,
    delPost
}