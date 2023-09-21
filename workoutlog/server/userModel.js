const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  auth0Id: String,
  email: String,
  name: String,
  age: Number,
  height: Number,
  weight: Number,
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;