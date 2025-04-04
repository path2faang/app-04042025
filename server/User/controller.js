const { registerUser, loginUser } = require('./service');

async function register(req, res, next) {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { token, user } = await loginUser(req.body.email, req.body.password);
    res.json({ message: 'Login successful', token, user });
  } catch (error) {
    next(error);
  }
}

module.exports = { register, login };