const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// book schema
const bookSchema = new Schema({
  // title of books
  title: String,
  // author of books
  authors: String,
  // book's description
  description: String,
  //book's image
  image: String,
  // link of books
  link: String
});

const Article = mongoose.model("Article", bookSchema);

module.exports = Article;