const UserModel = require('../Models/User.model');
const FormChecker = require('./ServerWorker/FormChecker');

const Register = async (req, res) => {
  const userForm = new FormChecker(req.body);
  const response = userForm.checkValidRegisterForm();
  if (response.error) {
    res.json(response);
  } else {
    res.json(req.body.message);
  }
};

module.exports = Register;
