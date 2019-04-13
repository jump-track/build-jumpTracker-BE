exports.up = knex =>
  knex.schema.createTable('goals', tbl => {
    tbl
      .increments();

    tbl
      .integer('jump_height')
      .notNullable();

    tbl
      .boolean('completed')
      .notNullable()
      .defaultTo(false)

    tbl
      .timestamp('start_date')
      .notNullable()
      .defaultTo(knex.fn.now());

    tbl
      .timestamp('target_date')
      .notNullable()

    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })

exports.down = knex => knex.schema.dropTableIfExists('goals');