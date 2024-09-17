// eslint-disable-next-line no-undef
const config = require('../config');

// GET test 2 checks that getting a kit returns a 200 status code

test('Should return 200 status code', async () => {
    let actualStatus; 
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/2`);
        actualStatus = response.status; 
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});

// GET test 2 checks that the correct json body response is recieved for the kit "For movies and series"

test('Should contain For movies and series', async () => {
	let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/2`);
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
 expect(actualResponseBody.name).toBe("For movies and series");
});


