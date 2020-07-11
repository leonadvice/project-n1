const UserModel = require('../Models/User.model');

const controller = async (req, res) => {
  UserModel.createNewUser({
    email: 'test3',
    name: 'test3',
    password: 'test3',
    handle: 'test3',
  });
  UserModel.test();
  // console.log(await UserModel.findOneByEmail('test'));
  res.json(req.body.message);
};

module.exports = controller;
