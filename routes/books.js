const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books')

router.get('/list', booksController.getBookList)

module.exports = router