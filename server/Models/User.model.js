const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  handle: { type: String, required: true },
  name: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

class UserModel {
  constructor(id) {
    this.id = id;
  }

  static createNewUser(user) {
    const newUser = new User();
    newUser.email = user.email;
    newUser.password = user.password;
    newUser.handle = user.handle;
    newUser.name = user.name;

    newUser.save((err, data) => {
      if (err) {
        console.log(`this is error message: ${err}`);
        return false;
      }
      return data;
    });
  }
}

module.exports = UserModel;
