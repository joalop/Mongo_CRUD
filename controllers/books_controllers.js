const mongoConn = require('../database/mongoConn');

let data, info;

const searchBooks = (req, res, next) => {
// Ver
const mostrar = async () => {
    const books = await  mongoConn.find()
    return books
}

let ver = mostrar();

setTimeout( () => {
    data = ver

    ver.then(
        (data) => { /*console.log(data, typeof(data));*/ info = data}).catch(
            (err) => { console.log(err);
        });

    res.render('books',{ info})
}, 500)};

module.exports = { searchBooks }