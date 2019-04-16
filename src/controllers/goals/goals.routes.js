const router = require('express').Router();
const moment = require('moment');
const db = require('./goals.models.js');

router.get('/', async (req, res) => {
  const id = 1;
  try {
    const goals = await db.getGoals(id)
    console.log(goals);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  const goalObj = {
    user_id: 1,
    jump_height: req.body.jumpHeight,
    start_date: moment().format('MMMM Do YYYY'),
    target_date: moment().add(req.body.target, 'w').format('MMMM Do YYYY'),
    completed: false
  }
  try {
    const [id] = await db.insertGoal(goalObj);
    if (id) {
      res.status(201).json({ message: 'Goal has been added' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const goalObj = {
    user_id: 1,
    jump_height: req.body.jumpHeight,
    start_date: moment().format('MMMM Do YYYY'),
    target_date: moment().add(req.body.target, 'w').format('MMMM Do YYYY'),
    completed: false
  }
  try {
    const result = await db.updateGoal(id, goalObj);
    if (result) {
      res.status(200).json({ message: 'Goal updated' });
    } else {
      res.status(404).json({ message: 'Goal not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.deleteGoal(1);
    console.log(result);
    // if (result) {
    //   res.status(200).json({ message: 'Goal deleted' });
    // } else {
    //   res.status(404).json({ message: 'Goal not found' });
    // }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;