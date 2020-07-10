const UserModel = require('../Models/User.model');

const controller = (req, res) => {
  UserModel.createNewUser();
  res.json('a new user was created');
};

module.exports = controller;
