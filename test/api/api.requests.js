import axios from "axios";
import testData from "./test.data.js";

class ApiRequests{
    async getRequest(url){
        axios.get(`${url}`)
        .then(function (response) {
            console.log(response);
            console.log(response.status);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }

    async postRequest(url, data){
        axios.post(`${url}`, data)
        .then(function (response) {
            console.log(response);
            console.log(response.status);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }

    async putRequest(id, data){
        axios.put(`${testData.url}/${id}`, data)
        .then(function (response) {
            console.log(response);
            console.log(response.status);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }

    async deleteRequest(id){
        axios.delete(`${testData.url}/${id}`)
        .then(function (response) {
            console.log(response);
            console.log(response.status);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }
}

export default new ApiRequests();