const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secrets.js');
const validateUser = require('../auth/validate-user.js');

router.post('/register', validateUser, (req, res) => {
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then((saved) => {
      res.status(201).json({
        message: "The user has been saved to the system",
        user: {
          id: saved.id,
          username: saved.username,
          email: saved.email
        }
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: 'There was an error saving the user',
        error: err
      })
    })
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `${username} has logged in successfully`,
          token,
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            currentCity: user.currentCity,
            state: user.state_abbreviation
          }
        })
      } else {
        res.status(401).json({
          message: "The username or password is incorrect"
        })
      }
    })
    .catch(err =>{
      res.status(500).json({
        message: 'There was an error on the server',
        error: err
      })
    })
});



function generateToken(user){
  const payload = {
    subject: user.id,
    username: user.username,
    lat: Date.now()
  }
  const options = {
    expiresIn: '1h'
  }
  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;