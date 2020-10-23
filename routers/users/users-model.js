const knex = require('../../database/dbConfig.js')

module.exports = {
    find,
    findBy,
    add,
    findById,
    update,
    remove
}

function find() {
    return knex('users').select('id','firstName', 'lastName', 'username', 'email', 'currentCity', 'state_abbreviation', 'recommendation_1', 'recommendation_2')
}

function findById(id) {
    return knex('users').where({id}).first();
}

function findBy(filter) {
    return knex('users').where(filter)
} 

async function add(user) {
    const [id] = await knex('users').insert(user)
    return findById(id)
}

function update(changes, id) {
    return(
        knex('users').where({ id }).update(changes)
    )
}

function remove (id) {
    return knex('users')
        .where('id', id)
        .del();
}
