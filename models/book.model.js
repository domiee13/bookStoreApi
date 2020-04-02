var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    imgUrl: String
});

var Book = mongoose.model('Book', bookSchema,'books');

module.exports = Book;