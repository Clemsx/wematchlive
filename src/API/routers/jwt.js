const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// TODO
router.get('/', async (req, res) => {
  let token = jwt.sign('verified_user', process.env.JWT_TOKEN);
  res.send(token);
});

module.exports = router;
