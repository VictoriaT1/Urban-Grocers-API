// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name": "my kit",
	"cardId": 1
}

test('test delete', async () => {

	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}


	let actualResponseBody = await response.json();
	let actualId = actualResponseBody.id; 

	let deleteStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/` + actualId, {
			method: 'DELETE',
		});
		deleteStatus = response.status;

	} catch (error) {
		console.error(error);
	}
	expect(deleteStatus).toBe(200);
});

