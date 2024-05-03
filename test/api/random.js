import axios from "axios";

class RandomMethods{
    getRandomId() {
        return Math.floor(Math.random() * 100) + 1;
    }
}

export default new RandomMethods();