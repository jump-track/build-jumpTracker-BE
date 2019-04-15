exports.seed = knex =>
  knex('users')
    .insert([
      { username: 'admin', password: 'admin', height: 175, jump_height: 40 }
    ]);