require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

//Database shit
const mongoose = require('mongoose');
const URI = process.env.AtlasURI;
// mongoose
//   .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {})
//   .catch((err) => console.log(err));

const connect = async function () {
  return mongoose.connect(URI, { useNewUrlParser: true });
};

(async () => {
  try {
    const connected = await connect();
  } catch (e) {
    console.log('Error happend while connecting to the DB: ', e.message);
  }
})();

//testing controllers

const createNewUser = require('./Controllers/Register');

const PORT = process.env.PORT || 3000;

const authRoutes = require('./Routes/authRoutes');

app.use(authRoutes);

app.get('/testMongoose', (req, res) => {
  createNewUser(null);
  res.json('this code run');
});

app.listen(PORT, () => console.log(`rest service is running on port ${PORT}`));
