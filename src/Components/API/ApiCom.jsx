import axios from "axios";

export default class PostService{

    static async getAll() {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        return response.data;
    }
}