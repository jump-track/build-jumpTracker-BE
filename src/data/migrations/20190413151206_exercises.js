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
      .timestamp('date')
      .notNullable()
      .defaultTo(knex.fn.now());
  })

exports.down = knex => knex.schema.dropTableIfExists('exercises');