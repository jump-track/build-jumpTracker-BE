const router = require('express').Router();
const moment = require('moment');
const db = require('./exercises.models.js');
const { restricted } = require('../../utils/auth.js');

router.get('/:goalId', restricted, async (req, res) => {
  const { goalId } = req.params;
  try {
    const exercises = await db.getExercises(goalId);
    res.status(200).json(exercises);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/:goalId', restricted, async (req, res) => {
  const { goalId } = req.params;
  const exObj = {
    exercises: req.body.exercises,
    date: moment().format('MMMM Do YYYY'),
    goal_id: goalId
  }
  try {
    const [id] = await db.insertExercise(exObj);
    console.log(id);
    if (id) {
      const exercises = await db.getExercises(goalId);
      res.status(201).json(exercises);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;