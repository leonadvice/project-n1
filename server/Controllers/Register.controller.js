const UserModel = require('../Models/User.model');

const controller = (req, res) => {
  // UserModel.findOneByHandle('testt');
  res.json(req.body.message);
};

module.exports = controller;
