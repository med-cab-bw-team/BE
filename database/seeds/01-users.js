
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      return knex('users').insert([
        {
          firstName: 'Cheech',
          lastname: 'Marin',
          username: 'pedro',
          password: 'password',
          email: 'stoner_cheech@hightimes.com',
          currentCity: 'Los Angeles',
          state_abbreviation: 'CA',
        },
        {
          firstName: 'Tommy',
          lastname: 'Chong',
          username: 'man',
          password: 'password',
          email: 'stoner_chong@hightimes.com',
          currentCity: 'Los Angeles',
          state_abbreviation: 'CA',
        },
        {
          firstName: 'Calvin',
          lastname: 'Broadus Jr.',
          username: 'snoopdogg420',
          password: 'password',
          email: 'snoop-dogg@hightimes.com',
          currentCity: 'Long Beach',
          state_abbreviation: 'CA',
        },
        {
          firstName: 'Willie',
          lastname: 'Nelson',
          username: 'wnelson',
          password: 'password',
          email: 'me@willienelson.com',
          currentCity: 'Abott',
          state_abbreviation: 'TX',
        },
      ]);
    });
};
