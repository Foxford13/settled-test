'use strict';

const fs = require('fs');
const util = require('util');
const path = require('path');

module.exports = {
	getData: async function (fileName) {
		const readFile = util.promisify(fs.readFile);
		let data;
		try {
			data = await readFile(path.join(__dirname, `data/${fileName}.json`), 'utf8');
		} catch (err) {
			console.error(err);
		}
		return JSON.parse(data);
	},

	getDoc: async function (collection, docId) {
		let result;
		try {
			const data = await module.exports.getData(collection);
			if (!docId) return data;

			for (const doc of data) {
				if (doc.id === docId) {
					result = doc;
					break;
				}
			}

			if (!result) return { message: 'There is no document with this id' };
		} catch (err) {
			console.error(err);
		}

		return result;
	},

	sendEmail: function (emailData) {
		return console.log(
			`
						Pretending to send email...
						---
						To: ${emailData.user.email}
						From: hello@settled.co.uk

						Subject: Your listing is getting popular
						Content:
						Hi ${emailData.user.name},

						Your listing for ${emailData.listing.adress}, ${emailData.listing.postcode} has been viewed over 1000 times. Congratulations!

						Kind regards,
						The Settled Team
						---
						`

		);
	}
};
