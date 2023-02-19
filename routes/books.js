const express = require('express')
const router = express.Router();

const { searchBooks } = require('../controllers/books_controllers')

router.get('/', searchBooks );

router.get('/new', (req, res, next) => {
    res.render('new', {})
});

module.exports = router