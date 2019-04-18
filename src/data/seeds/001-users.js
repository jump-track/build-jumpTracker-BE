const bcrypt = require('bcryptjs');
exports.seed = async knex => {
  const password = await bcrypt.hashSync('tenzing', 1);
  return knex('users')
    .insert([
      { username: 'tenzing', password, height: 175, jump_height: 20 }
    ]);
}
