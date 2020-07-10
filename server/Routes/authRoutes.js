const express = require('express');
const router = express.Router();
const UserModel = require('../Controllers/Register.controller');

//Middleware specificly for these routes only
router.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

router.post('/token', (req, res) => {
  res.json(true);
});

router.post('/test', UserModel);

module.exports = router;
