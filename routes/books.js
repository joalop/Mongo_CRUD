const express = require('express')
const router = express.Router();

const { searchBooks, insertBooks, getupdatesBooks, postupdatesBooks, getDelete } = require('../controllers/books_controllers')

router.get('/', searchBooks );

router.get('/new', (req, res, next) => {
    res.render('new', {})
    
});

router.post('/new', insertBooks);

/* params */
// router.get('/update/:id', (req, res, next) => {
//     console.log( req.params)
//     res.send('Update')
// });

/* query */
// router.get('/update', (req, res, next) => {
//     console.log( req.query )
//     res.send('Update')
// });

// router.get('/update', (req, res, next) => {
//     console.log( req.query )
//     res.render('update', { })
// });

router.get('/update', getupdatesBooks)

router.post('/update', postupdatesBooks)

router.get('/delete', getDelete)


module.exports = router