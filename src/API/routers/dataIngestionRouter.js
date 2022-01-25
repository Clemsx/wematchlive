
const express = require('express');
const router = express.Router()
const insert = require('../../DAL/volumeDataCollectionHandler');

router.get('/health', (req, res) => {
	return res.status(200).send('healthy')
})

// TODO
router.post('/data', async (req, res) => {
	const result = await insert.insertVolumeDataToMongo(req.body.data);

	res.status(result.code);
	res.send(result.message);
})

module.exports = router