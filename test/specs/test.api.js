import apiRequests from "../api/api.requests.js";
import random from "../api/random.js";
import testData from "../api/test.data.js";

describe('API Test ', () => {
    afterEach(() => {
        testData.data = null;
    });
    
    it('should make a GET request and validate response', async () => {
        const response = await apiRequests.getRequest(testData.url);
        expect(response.status).toEqual(testData.status);
    });

    it('should make a POST request and validate response', async () => {
        const response = await apiRequests.postRequest(testData.url, testData.data);
        expect(response.status).toEqual(testData.status);
        expect(response.data).toEqual(testData.data);
    });

    it('should make a PUT request and validate response', async () => {
        const randomId = await random.getRandomId();
        const response = await apiRequests.putRequest(randomId, testData.data);
        expect(response.status).toEqual(testData.status);
        expect(response.data).toEqual(testData.data);
    });

    it('should make a DELETE request and validate response', async () => {
        const randomId = await random.getRandomId();
        const response = await apiRequests.deleteRequest(randomId);
        expect(response.status).toEqual(testData.status);
    });
})