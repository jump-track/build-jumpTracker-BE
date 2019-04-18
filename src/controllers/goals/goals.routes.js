const router = require('express').Router();
const moment = require('moment');
const db = require('./goals.models.js');
const { restricted } = require('../../utils/auth.js');

router.get('/', restricted, async (req, res) => {
  const id = req.decodedJwt.id; // comment this out for test
  // const id = 1; // comment out in production.
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

router.post('/',
  restricted,
  checkGoalPayload,
  checkGoalPayloadDataTypes,
  async (req, res) => {
    const goalObj = {
      user_id: req.decodedJwt.id, // comment this out for test
      // user_id: 1, // comment out in production.
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

router.put('/:goalId',
  restricted,
  isCompletedTrue,
  async (req, res) => {
    // const { goalId } = req.params; // comment this out for test
    const goalId = 44; // comment out in production.
    // const userId = req.decodedJwt.id; // comment this out for test
    const userId = 1; // comment out in production.
    const goalObj = {
      completed: req.body.completed
    }
    console.log(goalObj);
    try {
      const result = await db.updateGoal(userId, goalId, goalObj);
      console.log(result);
      if (result) {
        const goals = await db.getGoals(userId);
        console.log(goals);
        res.status(200).json(goals);
      } else {
        res.status(404).json({ message: 'Goal not found' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.delete('/:goalId', restricted, async (req, res) => {
  const { goalId } = req.params; // comment this out for test
  // const goalId = 63; // comment out in production.
  const userId = req.decodedJwt.id; // comment this out for test
  // const userId = 1; // comment out in production.
  console.log(goalId, userId);
  try {
    const result = await db.deleteGoal(userId, goalId);
    console.log(result);
    if (result) {
      res.status(200).json({ message: 'Goal deleted' });
    } else {
      res.status(404).json({ message: 'Goal not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


async function checkGoalPayload(req, res, next) {
  const { jumpHeight, target } = req.body;
  if (jumpHeight && target) {
    next();
  } else {
    res.status(400).json({ message: 'Jump Height and Target required' });
  }
}

async function checkGoalPayloadDataTypes(req, res, next) {
  const { jumpHeight, target } = req.body;
  if (typeof jumpHeight !== 'number') {
    res.status(400).json({ message: 'Jump Height must be a number' });
  } else if (typeof target !== 'number') {
    res.status(400).json({ message: 'Target must be a number' });
  } else {
    next();
  }
}

async function isCompletedTrue(req, res, next) {
  if (req.body && req.body.completed) {
    next();
  } else {
    res.status(400).json({ message: 'Must complete goal' });
  }
}


module.exports = router;