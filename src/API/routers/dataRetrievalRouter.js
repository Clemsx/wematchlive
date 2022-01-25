const express = require('express');
const router = express.Router();
const { basicAuthMiddleware } = require('../middlewares/authMiddleware');
const {
  getDataForDateRange,
} = require('../../DAL/volumeDataCollectionHandler');

// TODO
router.get('/', basicAuthMiddleware, async (req, res) => {
  const { startDate, endDate } = req.query;
  const result = await getDataForDateRange(startDate, endDate);

  res.send(result);
});

module.exports = router;
