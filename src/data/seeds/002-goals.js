exports.seed = knex =>
  knex('goals')
    .insert([
      { jump_height: 50, target_date: 1, user_id: 1 }
    ]);