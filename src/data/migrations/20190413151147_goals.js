exports.up = knex =>
  knex.schema.createTable('goals', tbl => {
    tbl
      .increments();

    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl
      .integer('jump_height')
      .notNullable();

    tbl
      .string('start_date')
      .notNullable();

    tbl
      .string('target_date')
      .notNullable()

    tbl
      .boolean('completed')
      .notNullable()
      .defaultTo(false)
  })

exports.down = knex => knex.schema.dropTableIfExists('goals');