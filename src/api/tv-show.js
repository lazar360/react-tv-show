import axios from "axios";
import { API_KEY_PARAM, BASE_URL } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    try {
      const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
      return response.data.results;
    } catch (error) {
      alert("Erreur durant la recherche des séries populaires");
    }
  }

  static async fetchRecommendations(TVShowId) {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/${TVShowId}/recommendations${API_KEY_PARAM}`
      );
      return response.data.results;
    } catch (error) {
      alert("Erreur durant la recherche des séries populaires" + error.message);
    }
  }

  static async fetchByTitle(title) {
    try {
      const response = await axios.get(
        `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
      );
      return response.data.results;
    } catch (error) {
      alert("Erreur durant la recherche des séries populaires");
    }
  }
}
