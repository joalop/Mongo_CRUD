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
// Get update values
const getupdatesBooks = (req, res, next) => {
    //console.log( req.query )
    //console.log( req.query.id )

    const mostrar = async () => {
        const books = await  mongoConn.find( {_id:req.query.id} )
        return books
    }
    let ver = mostrar();
    console.log(ver)
            ver.then(

            (data) => {
                console.log(data, typeof(data));
                //info = data
                res.render('update', {data})
            }).catch(
                (err) => {
                    console.log(err);
                    res.redirect('/', { });
            });
}

// Pos update Values
const postupdatesBooks = (req, res, next) => {
    console.log( req.body )

    const  actualizar = async (id) => {
        let libro = await mongoConn.updateOne({_id:id},
            {
                $set:{
                    title: req.body.title,
                    author: req.body.author,
                    image: req.body.image,
                    description: req.body.description,
                }
            })
        return libro
    }
    let ver = actualizar(req.body.id);
    console.log(ver)
            ver.then( (data) => {
                console.log(data, typeof(data));
                res.redirect( '/books' )
            }).catch(
                (err) => {
                    console.log(err);
                    res.redirect('/', { });
            });
}

// Delete value
const getDelete = (req, res, next) => {
    //console.log( req.query )

    const borrar = async (id) => {
        const elimina = await mongoConn.deleteOne({_id:id})
        console.log(elimina)
    }

    let ver = borrar(req.query.id);
    console.log(ver)
    ver.then( (data) => {
        console.log(data, typeof(data));
        res.redirect( '/books' )
    }).catch(
        (err) => {
            console.log(err);
            res.redirect('/', { });
    });
}

module.exports = { searchBooks, insertBooks, getupdatesBooks, postupdatesBooks, getDelete }