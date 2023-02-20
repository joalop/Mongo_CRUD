const mongoConn = require('../database/mongoConn');

let data, info;

const searchBooks = (req, res, next) => {

    // find() = select Mysql
    const mostrar = async () => {
        const books = await  mongoConn.find()
        return books
    }
    let ver = mostrar();

    setTimeout( () => {
        data = ver

        ver.then(

            (data) => {
                /*console.log(data, typeof(data));*/
                info = data
                res.render('books',{ info})
            }).catch(
                (err) => {
                    console.log(err);
                    res.redirect('/', { })
            });

        
    }, 1000)
};

// save() = insert Mysql
const insertBooks = (req, res, next) => {
    
    console.log( req.body )

    const crear = async () => {
        const book = new mongoConn({
            title: String( req.body.title ),
            author: String( req.body.author ),
            image: String( req.body.image ),
            description: String( req.body.description )
        })
        
        const result = await book.save()
        console.log(result)
    };
    
    crear();

    setTimeout( ( ) => {
        res.redirect('/books')
    },1000)
}

// updateOne ( Uno ) = updated mysql

const updatesBooks = (req, res, next) => {
    console-log( req.query)
    const  actualizar = async (id) => {
        const libro = await BooksModel.updateOne({_id:id},
            {
                $set:{
                    title: 'ESDLA',
                    author: 'Peter Jackson 2'
                }
            })
            console.log('Actualizar Pasdo')
    } 
}

module.exports = { searchBooks, insertBooks, updatesBooks }