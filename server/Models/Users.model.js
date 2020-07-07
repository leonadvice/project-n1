require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  handle: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  token: [String],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
