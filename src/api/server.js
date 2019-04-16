const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const users = require('../controllers/users/users.routes.js');
const goals = require('../controllers/goals/goals.routes.js');
const exercises = require('../controllers/exercises/exercises.models.js');

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/users', users);
server.use('/goals', goals);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome to the jump-tracker api' });
});

module.exports = server;