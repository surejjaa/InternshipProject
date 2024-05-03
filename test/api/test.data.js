import axios from "axios";

class TestData{
    constructor() {
        this.status = 200;
        this.postData = { "id": 0, "idBook": 0, "firstName": "Mesa", "lastName": "Selimovic" };
        this.putData = { "id": 0, "idBook": 0, "firstName": "Dervis", "lastName": "Susic" }
    }
}

export default new TestData();