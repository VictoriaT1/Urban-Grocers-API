// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
		"products": [
			{
				"id": 1,
				"quantity": 3
			},
			{
				"id": 4,
				"quantity": 1
			},
			{
				"id": 9,
				"quantity": 3
			}
		],
		"deliveryTime": 7
	}

test('check courier delivery and status response as 200', async () => {
	let postStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		postStatus = response.status;
		
	} catch (error) {
		console.error(error);
	}
	expect(postStatus).toBe(200);
});
