import apiRequests from "../api/api.requests.js";
import random from "../api/random.js";
import testData from "../api/test.data.js";

describe('API Test ', () => {
    it('should make a GET request and validate response', async () => {
        const response = await apiRequests.getRequest();
        expect(response.status).toEqual(testData.status);
    });

    it('should make a POST request and validate response', async () => {
        const response = await apiRequests.postRequest(testData.postData);
        expect(response.status).toEqual(testData.status);
        expect(response.data).toEqual(testData.postData);
    });

    it('should make a PUT request and validate response', async () => {
        const response = await apiRequests.putRequest(1, testData.putData);
        expect(response.status).toEqual(testData.status);
        expect(response.data).toEqual(testData.putData);
    });

    it('should make a DELETE request and validate response', async () => {
        const randomId = random.getRandomId();
        const response = await apiRequests.deleteRequest(randomId);
        expect(response.status).toEqual(testData.status);
    });
})