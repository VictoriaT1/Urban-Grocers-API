// eslint-disable-next-line no-undef
const config = require('../config');
// Creating a request body
const requestBody = {
	"productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        }
    ]
	}

// POST test 1 ensures that when an order is created, the server responds with a 201 status code indicating successful creation

test('Should return 201 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualStatusCode = response.status;     
    } catch (error) {
        console.error(error);
    }

    expect(actualStatusCode).toBe(201);
});

// POST test 2 verifies that when an order is created the courierService field in the response is set to "Order and Go"

test('Should contain Order and Go', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualResponseBody = await response.json();    
    } catch (error) {
        console.error(error);
    }
	expect(actualResponseBody["courierService"]).toBe("Order and Go");
});
