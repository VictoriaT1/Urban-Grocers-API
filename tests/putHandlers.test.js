// eslint-disable-next-line no-undef
const config = require('../config');

// PUT test 1 checks that when a product's price is updated the server responds with a status code of 200

test('Status code should be 200', async () => {
	let actualstatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, 
		{
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualstatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualstatus).toBe(200);
});

const requestBody = {
    "price": 175
}

// PUT test 2 test checks that when a product is updated via a PUT request the server responds with a JSON object that includes `"ok": true`

test('Response body should contain ok true', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, 
		{
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
		expect(actualResponseBody.ok).toBe(true);
	});
