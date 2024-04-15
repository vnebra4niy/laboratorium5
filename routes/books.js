const express = require('express')
const router = express.Router()

const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
];

router.get('/list', (req, res) => {
    res.render('books', { books: books })
})

router.get('/add', (req, res) => {
    res.render('add-book');
})

router.post('/add', (req, res) => {
    res.redirect('/books/list')
})

router.delete('/delete/:id', (req, res) => {
    res.redirect('/books/list')
})

module.exports = router