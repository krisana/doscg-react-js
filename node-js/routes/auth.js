import express from 'express'
import jwt from 'jsonwebtoken'
import config from 'config'
import passport from 'passport'
import User from '../src/models/User'
import {
  generateSalt,
  hasher,
  compare
} from '../src/helpers'
const { registerValidation, loginValidation } = require("../src/validation");

const router = express.Router()

router.post('/login', (req, res) => {
  passport.authenticate('local', {
    session: false
  }, (err, user, info) => {

    if (err || !user) {
      return res.status(401).send({
        error: err ? err.message : 'The username or password is incorrect.',
      })
    }

    req.login(user, {
      session: false
    }, error => {
      const token = jwt.sign({
        name: user.name,
        id: user._id,
      },
        config.get('auth.jwt.secret')
      );

      return res.header("auth-token", token).json({
        message: null,
        data: {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
          token,
        },
      });
    })
  })(req, res)
});

router.post("/register", async (req, res) => {

  const { error } = registerValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const isEmailExist = await User.findOne({ email: req.body.email });

  if (isEmailExist)
    return res.status(400).json({ message: "Email already exists" });

  const salt = generateSalt(13)
  const { hashedpassword } = hasher(req.body.password, salt);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedpassword,
    salt
  });
  try {
    const savedUser = await user.save();
    res.json({ message: null, data: savedUser });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router