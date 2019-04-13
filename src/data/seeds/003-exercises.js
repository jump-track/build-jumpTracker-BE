exports.seed = knex =>
  knex('exercises')
    .insert([
      { exercises: 'test', goal_id: 1 }
    ]);