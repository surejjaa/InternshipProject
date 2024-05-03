import axios from "axios";

class ApiRequests{
    async getRequest(){
        axios.get('https://fakerestapi.azurewebsites.net/api/v1/Authors')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log(response.status);
        });
    }

    async postRequest(data){
        axios.post('https://fakerestapi.azurewebsites.net/api/v1/Authors', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log(response.status);
        });
    }

    async putRequest(id, data){
        axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${id}`, data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log(response.status);
        });
    }

    async deleteRequest(id){
        axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log(response.status);
        });
    }
}

export default new ApiRequests();