const User = require('../Models/Users.model');

const done = (err, data) => {
  if (err) return console.log(err);
  console.log(data);
};

// const findUserByEmail = (email) => {
//   User.findOne({ email: email }, (err, data) => {
//     if (err) return console.log(err);
//     console.log(data);
//   });
// };

var findUserByEmail = function (email, done) {
  Person.find({ name: email }, (err, data) => {
    if (err) return done(err);
    console.log(data);
    done(null, data);
  });
};

const createNewUser = (userData) => {
  findUserByEmail('nhat.nguyen1125@gmail.com', done);
};

module.exports = createNewUser;
