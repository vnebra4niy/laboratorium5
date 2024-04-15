const Book = require('../models/book')

const books = [
    new Book(1, 'Title 1', 2000, 1),
    new Book(2, 'Title 2', 2005, 2),
    new Book(3, 'Title 3', 2010, 3)
];

exports.getBookList = (req, res) => {
    res.render('books', { books })
}