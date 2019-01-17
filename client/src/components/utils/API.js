import axios from "axios";

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
  saveBooks: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getOneBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  deleteBook: function(id) {
    return axios.delete("api/books/" + id);
  },
  search: function(query) {
    return axios.post("/books/" + query);
  }
};