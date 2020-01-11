'use strict';
const express = require('express');
const router = express.Router();
const { getDoc, sendEmail } = require('./utilities');


router.post('/send-email', async (req, res) => {
	const { listing_id } = req.body;

	try {
		const listing = await getDoc('listings', listing_id);
		const user = await getDoc('users', listing.user_id);

		if (listing.message || user.message) return res.send(listing.message || user.message);


		sendEmail({ listing, user });
	} catch (err) {
		return res.status(500).send({ error: 'There was an issue with your request' });
	}
	return res.send({ message: 'Email has been sent' });
});

module.exports = router;
