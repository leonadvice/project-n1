const nodeMailer = require('nodemailer');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.pass,
  },
});

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  handle: { type: String, required: true },
  name: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
const TempUser = mongoose.model('TempUser', userSchema);

class UserModel {
  constructor(id) {
    this.id = id;
  }

  static async findOneTempByEmail(email) {
    return await TempUser.findOne({ email: email }, { _id: 1 }, (err, data) => {
      if (err) {
        console.log(`this is error message: ${err}`);
        return false;
      }
      console.log(data);
      console.log('this code run');
      return data;
    });
  }

  static async findOneTempByHandle(handle) {
    return await TempUser.findOne({ handle: handle }, { _id: 1 }, (err, data) => {
      if (err) {
        console.log(`this is error message: ${err}`);
        return false;
      }
      console.log(data);
      return data;
    });
  }

  static async findOneByEmail(email) {
    return await User.findOne({ email: email }, { _id: 1 }, (err, data) => {
      if (err) {
        console.log(`this is error message: ${err}`);
        return false;
      }
      console.log(data);
      return data;
    });
  }

  static async findOneByHandle(handle) {
    return await User.findOne({ handle: handle }, { _id: 1 }, (err, data) => {
      if (err) {
        console.log(`this is error message: ${err}`);
        return false;
      }
      console.log(data);
      return data;
    });
  }

  static createNewUser(user) {
    const newUser = new TempUser();
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
