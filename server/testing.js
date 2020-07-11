const mongoose = require('mongoose');
const DBKEY = process.env.DBKEY;
mongoose.connect(
  'mongodb+srv://minhnhat34:minhnhat43@chat-app.lccqb.mongodb.net/test2?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  handle: { type: String, required: true },
  name: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

const user = {
  email: 'test3',
  name: 'test3',
  password: 'test3',
  handle: 'test3',
};

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
