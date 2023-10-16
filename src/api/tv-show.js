import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "?api_key=a2906c85aac5bdea6daf2de4a734c5c8";

export class TVShowAPI {
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        console.log("response.data.results", response.data.results);
        return response.data.results;
    }
}