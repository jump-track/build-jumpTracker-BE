const router = require('express').Router();
const moment = require('moment');
const db = require('./goals.models.js');
const { restricted } = require('../../utils/auth.js');

router.get('/', restricted, async (req, res) => {
  const id = req.decodedJwt.id;
  console.log(req.decodedJwt);
  try {
    const goals = await db.getGoals(id)
    const response = goals.map(goal => ({
      ...goal, completed: goal.completed ? 'true' : 'false'
    }));
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', restricted, async (req, res) => {
  const goalObj = {
    user_id: req.decodedJwt.id,
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