const User = require('./model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser(userData) {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = new User({ ...userData, password: hashedPassword });
  return await user.save();
}

async function loginUser(email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');
  
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { token, user };
}

module.exports = { registerUser, loginUser };