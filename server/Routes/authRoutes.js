const express = require('express');
const router = express.Router();

//Middleware specificly for these routes only
router.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

router.get('/login', (req, res) => {
  res.json('This is the login p');
});

router.post('/token', (req, res) => {
  res.json(false);
});

module.exports = router;
