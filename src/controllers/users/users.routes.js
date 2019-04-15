const router = require('express').Router();
const bcrypt = require('bcryptjs');
const db = require('./users.models.js');
const jwt = require('../../utils/jwt.js');

router.post('/login',
  loginInputs,
  loginDataType,
  usernameLowerCase,
  async (req, res, next) => {
    console.log(req.body);
    const { username, password } = req.body;
    try {
      const user = await db.validate(username)
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = await jwt.sign({ id: user.id, username: user.username })
        res.status(200).json(token);
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


router.post('/register',
  registerInputs,
  registerDataType,
  usernameLowerCase,
  usernameIsUnique,
  hashPassword,
  async (req, res) => {
    const userObj = {
      username: req.body.username,
      password: req.body.password,
      height: req.body.height,
      jump_height: req.body.jumpHeight
    }
    try {
      const arr = await db.insert(userObj);
      const id = arr[0];
      if (id) {
        const token = await jwt.sign({ id, username: req.body.username });
        res.status(201).json(token);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

async function loginDataType(req, res, next) {
  const { username, password } = req.body;
  if (typeof username !== 'string') {
    res.status(400).json({ message: 'Username must be a string' });
  } else if (typeof password !== 'string') {
    res.status(400).json({ message: 'Password must be a string' });
  } else {
    next();
  }
}

async function loginInputs(req, res, next) {
  const { username, password } = req.body;
  if (username && password) {
    next();
  } else {
    res.status(400).json({ message: 'All fields required' });
  }
}


async function hashPassword(req, res, next) {
  try {
    req.body.password = await bcrypt.hashSync(req.body.password, 4);
    next();
  } catch {
    res.status(500).json({ message: 'Error hashing password' });
  }
}

function usernameLowerCase(req, res, next) {
  req.body.username = req.body.username.toLowerCase();
  next();
}

async function usernameIsUnique(req, res, next) {
  try {
    const resource = await db.get(req.body.username);
    if (resource && resource.username) {
      res.status(400).json({ message: 'Choose a different username' })
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

function registerDataType(req, res, next) {
  const { username, password, height, jumpHeight } = req.body;
  if (typeof username !== 'string') {
    res.status(400).json({ message: 'Username must be a string' });
  } else if (typeof password !== 'string') {
    res.status(400).json({ message: 'Password must be a string' });
  } else if (typeof height !== 'number') {
    res.status(400).json({ message: 'Height must be a number' });
  } else if (typeof jumpHeight !== 'number') {
    res.status(400).json({ message: 'Jump Height must be a number' });
  } else {
    next();
  }
}

function registerInputs(req, res, next) {
  console.log(req.body);
  const { username, password, height, jumpHeight } = req.body;
  if (username && password && height && jumpHeight) {
    next()
  } else {
    res.status(400).json({ message: 'All fields required' });
  }
}



module.exports = router;