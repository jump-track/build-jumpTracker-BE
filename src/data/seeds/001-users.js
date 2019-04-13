exports.seed = knex =>
  knex('users')
    .insert([
      { username: 'test', password: 'test', height: 175, jump_height: 40 }
    ]);