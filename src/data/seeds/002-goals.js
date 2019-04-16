exports.seed = knex =>
  knex('goals')
    .insert([
      {
        user_id: 1,
        jump_height: 50,
        start_date: 'April 16th 2019',
        target_date: 'April 30th 2019',
        completed: false
      }
    ]);