
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('02Posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {user_id: 1, contents: 'bilbo said this'},
        {user_id: 2, contents: 'sam said this'},
        {user_id: 3, contents: 'frodo said this'}
      ]);
    });
};
