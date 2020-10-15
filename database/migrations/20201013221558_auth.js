exports.up = function(knex) {
    
return knex.schema

    .createTable('states', states => {
        states.string('abbreviation')
            .notNullable()
            .unique()
            .primary()

        states.string('name')
            .notNullable()
            .unique()
    })

    .createTable('users', users => {
        users.increments();
        
        users.string('firstName', 255);

        users.string('lastname', 255);

        users.string('username', 255)
            .notNullable()
            .unique();

        users.string('password', 255)
            .notNullable();

        users.string('email', 255)
            .notNullable();

        users.string('currentCity', 255)
            
        users.string('state_abbreviation')
            .notNullable()
            .references('abbreviation')
            .inTable('states')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
   
};
  
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('states')
};
  