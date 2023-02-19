const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config()

mongoose.set('strictQuery', false);

// mongo conection
const mongoDB = process.env.MONGO_CONECTION;

// mongo works with promises
mongoose.connect(mongoDB)
//Connect
.then( () => { console.log('Conected with mongo'); } )
//Error
.catch( (e) => console.log(e) )

//Create a Schema to Documents
const booksSchema = mongoose.Schema({
    title: String,
    author: String,
    image: String,
    description: String,
}, { versionkey: false} )

// Define a Model to Collectino
const BooksModel = mongoose.model('books', booksSchema);

module.exports = BooksModel;