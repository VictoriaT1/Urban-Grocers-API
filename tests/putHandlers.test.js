// eslint-disable-next-line no-undef
const config = require('../config');


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
		console.log(response)
	} catch (error) {
		console.error(error);
	}
	expect(actualstatus).toBe(200);
});

const requestBody = {
    "price": 175
}
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
		console.log(response);
	} catch (error) {
		console.error(error);
	}
		expect(actualResponseBody.ok).toBe(true);
	});