const utilities = require('./utilities');


const userData = [
	{
		id: 1,
		name: 'James',
		surname: 'James',
		email: 'james@me.com'
	},
	{
		id: 2,
		name: 'John',
		surname: 'Dziekan',
		email: 'John@me.com'
	}
];

describe('getDoc', () => {
	it('should return all documents in a given collection if id is not given', async () => {
		jest.spyOn(utilities, 'getData').mockResolvedValueOnce(userData);

		const data = await utilities.getDoc('users');


		expect(data).toEqual(userData);
	});

	it('should return a single document from a given collection if a matching id is given', async () => {
		jest.spyOn(utilities, 'getData').mockResolvedValueOnce(userData);

		const data = await utilities.getDoc('users', 1);


		expect(data).toEqual({
			id: 1,
			name: 'James',
			surname: 'James',
			email: 'james@me.com'
		});
	});


	it('should return a message if there is not matching documents', async () => {
		jest.spyOn(utilities, 'getData').mockResolvedValueOnce(userData);

		const data = await utilities.getDoc('users', 1231);


		expect(data).toEqual({ message: 'There is no document with this id in that collection' });
	});
});

