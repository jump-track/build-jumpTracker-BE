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

router.post('/:goalId',
  restricted,
  checkExercisesInput,
  checkExercisesDataType,
  async (req, res) => {
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

async function checkExercisesInput(req, res, next) {
  if (req.body && req.body.exercises) {
    next();
  } else {
    res.status(400).json({ message: 'Must send an exercise' });
  }
}

async function checkExercisesDataType(req, res, next) {
  const { exercises } = req.body;
  if (typeof exercises !== 'string') {
    res.status(400).json({ message: 'Exercise must be a string' });
  } else {
    next();
  }
}

module.exports = router;