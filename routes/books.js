const express = require('express')
const router = express.Router();

const { searchBooks, insertBooks, updatesBooks } = require('../controllers/books_controllers')

router.get('/', searchBooks );

router.get('/new', (req, res, next) => {
    res.render('new', {})
    
});

router.post('/new', insertBooks);

router.get('/Update', updatesBooks)

module.exports = router