const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cookieParse = require('cookie-parser')

const app = express()

//Require routes files
const routesIndex = require('./routes/index')
const routesBooks = require('./routes/books')

// Setters
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

app.use( express.urlencoded( { extended: false } ));
// Cookie-Parse
app.use( cookieParse() );
// Plublic Files
app.use(express.static( path.join(__dirname,'./public') ));

// routes in app

app.use('/', routesIndex);
app.use('/books', routesBooks)

// Error 404
app.use( (req, res, next) => {
next( res.sendStatus(404),'<h1>Files not found</h1>' )
});

module.exports = app;