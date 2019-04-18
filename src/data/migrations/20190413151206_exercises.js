exports.up = knex =>
  knex.schema.createTable('exercises', tbl => {
    tbl
      .increments();

    tbl
      .string('exercises')
      .notNullable();

    tbl
      .integer('goal_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('goals')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl
      .string('date')
      .notNullable();
  })

exports.down = knex => knex.schema.dropTableIfExists('exercises');