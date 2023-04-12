// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200', async () => {
	let actualStatus; 
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status; 
		console.log(response)
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
});
