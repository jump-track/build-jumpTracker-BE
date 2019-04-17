const router = require('express').Router();
const moment = require('moment');
const db = require('./exercises.models.js');
const { restricted } = require('../../utils/auth.js');

router.get('/:exId', restricted, async (req, res) => {
  const { exId } = req.params;
  try {
    const exercises = await db.getExercises(exId);
    res.status(200).json(exercises);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', restricted, async (req, res) => {
  const exObj = {
    exercises: req.body.exercises,
    date: moment().format('MMMM Do YYYY'),
    goal_id: req.body.goalId
  }
  try {
    const [id] = await db.insertExercise(exObj);
    console.log(id);
    if (id) {
      res.status(201).json({ message: 'Exercise has been added' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;