
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('01users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'bilbo'},
        {id: 2, name: 'sam'},
        {id: 3, name: 'frodo'}
      ]);
    });
};
