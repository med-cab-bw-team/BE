const knex = require('../../database/dbConfig.js');

module.exports = {
    find
}

function find() {
    return(
        knex('states')
    )
}