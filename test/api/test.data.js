import axios from "axios";
import random from "./random.js";

class TestData{
    constructor() {
        this.status = 200;
        this.url = 'https://fakerestapi.azurewebsites.net/api/v1/Authors';
        this.data = this.generateData();
    }
    
    async generateData(){
        const id = await random.getRandomId();
        const idBook = await random.getRandomId();
        const firstName = await random.generateFirstname();
        const lastName = await random.generateLastname();
        return { "id": id, "idBook": idBook, "firstName": firstName, "lastName": lastName };
    }

    async buildUrl(id){
        return(`${this.url}/${id}`);
    }
}

export default new TestData();