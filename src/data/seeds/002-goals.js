exports.seed = knex =>
  knex('goals')
    .insert([
      {
        user_id: 1,
        jump_height: 25,
        start_date: 'January 1st 2019',
        target_date: 'January 10th 2019',
        completed: true
      },
      {
        user_id: 1,
        jump_height: 35,
        start_date: 'January 10th 2019',
        target_date: 'January 29th 2019',
        completed: true
      },
      {
        user_id: 1,
        jump_height: 38,
        start_date: 'January 29th 2019',
        target_date: 'February 5th 2019',
        completed: true
      },
      {
        user_id: 1,
        jump_height: 42,
        start_date: 'February 5th 2019',
        target_date: 'February 18th 2019',
        completed: true
      },
      {
        user_id: 1,
        jump_height: 50,
        start_date: 'February 18th 2019',
        target_date: 'March 21st 2019',
        completed: true
      },
      {
        user_id: 1,
        jump_height: 53,
        start_date: 'March 21st 2019',
        target_date: 'March 28th 2019',
        completed: true
      },
      {
        user_id: 1,
        jump_height: 55,
        start_date: 'March 28th 2019',
        target_date: 'April 6th 2019',
        completed: true
      },
      {
        user_id: 1,
        jump_height: 59,
        start_date: 'April 6th 2019',
        target_date: 'April 18th 2019',
        completed: true
      },
      {
        user_id: 1,
        jump_height: 65,
        start_date: 'April 18th 2019',
        target_date: 'May 1st 2019',
        completed: false
      },
    ]);