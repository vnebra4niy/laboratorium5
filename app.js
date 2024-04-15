const express = require('express')
const app = express()
const PORT = 3000

const authorsRouter = require('./routes/authors')
const booksRouter = require('./routes/books')
const homeRouter = require('./routes/home')

app.use('/authors', authorsRouter)
app.use('/books', booksRouter)
app.use('/', homeRouter)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('In progress...')
})

app.use((req, res, next) => {
    res.status(404).send("404 Not Found")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})