import * as request from "request-promise";

const API_KEY = '&key=AIzaSyAuGFxAZHq0gltWjTqNP1AtdIjFytwKwG0';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

class BookService {

  static async bookSearch(query) {
    if (query) {
      try {
        const response = await request.get(`${BASE_URL}${query}&projection=lite${API_KEY}`);
        return JSON.parse(response).items;
      } catch {
        return []
      }
    } else {
      return [];
    }
  }

}

export default BookService;
