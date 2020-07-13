const UserModel = require('../Models/User.model');
const FormChecker = require('./ServerWorker/FormChecker');

const Register = async (req, res) => {
  const userForm = new FormChecker(req.body);
  const response = userForm.checkValidRegisterForm();
  console.log(response);
  res.json(req.body.message);
};

module.exports = Register;
