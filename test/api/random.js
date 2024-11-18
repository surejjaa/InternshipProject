import axios from "axios";

class RandomMethods{
    async getRandomId() {
        return Math.floor(Math.random() * 100) + 1;
    }
    
    async getRandomInt(num) {
        return Math.floor(Math.random() * num) + 1;
    }
    
    async generateFirstname(){
        var names = ["John", "Jane", "Alice", "Bob", "Michael", "Emily", "David", "Sarah", "James", "Emma"];
        var firstname = names[this.getRandomInt(names.length)];
        return firstname;
    }

    async generateLastname(){
        var names = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
        var lastname = names[this.getRandomInt(names.length)];
        return lastname;
    }
}

export default new RandomMethods();