//dependencias

const express = require('express');

const bodyParser = require('body-parser');


const exphbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = express();
const port = 5500;
const ObjectId = require('mongodb').ObjectID;


app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());



//conexion de la base de datos

const dbname = 'GuitarCzarDB';

//cliente

//base de datos
var db = null;


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////



MongoClient.connect(`mongodb+srv://JuanDavidPF:<Amnesia2018>@guitarczardb-osfbb.mongodb.net/test?retryWrites=true&w=majority`, {

    auth: {
        user: 'JuanDavidPF',
        password: 'Amnesia2018'
    }

}, function (err, client) {

    //there was a mistake in the connection

    if (err) throw err;


    //conexión exitosa
    console.log()
    console.log("Connection was succesful");
    db = client.db(dbname);

    //iniciar servidor

    app.listen(process.env.PORT || 1234);
});


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


app.get('/', function (req, res) {

    console.log()
    console.log("Client entered the main page");
    res.render('home');


});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


app.get('/products', function (req, res) {

    console.log()

    console.log("Client entered the products page");
    console.log(req.query)

    const collection = db.collection('products');



    //object filters  

    if (req.query.object != undefined && req.query.fav == undefined && req.query.brand == undefined) {
        collection.find({

            object: {
                '$eq': req.query.object
            }


        }).toArray(function (err, docs) {
            assert.equal(null, err);
            if (err) {
                console.error(err);
                res.send(err);
                return;
            }
            let variables = {
                products: docs,
            }
            res.render('products', variables);
        });
    }


    /*fav filters*/
    if (req.query.object == undefined && req.query.fav != undefined && req.query.brand == undefined) {
        collection.find({

            fav: {
                '$eq': req.query.fav
            }


        }).toArray(function (err, docs) {
            assert.equal(null, err);
            if (err) {
                console.error(err);
                res.send(err);
                return;
            }
            let variables = {
                products: docs,
            }
            res.render('products', variables);
        });
    }


    /*filters */
    if (req.query.object != undefined && req.query.fav == undefined && req.query.brand != undefined) {
        collection.find({

            object: {
                '$eq': req.query.object
            },
            brand: {
                '$eq': req.query.brand
            }

        }).toArray(function (err, docs) {
            assert.equal(null, err);
            if (err) {
                console.error(err);
                res.send(err);
                return;
            }
            let variables = {
                products: docs,
            }
            res.render('products', variables);
        });
    }


    /* no filters*/
    if (req.query.object == undefined && req.query.fav == undefined && req.query.brand == undefined) {
        collection.find({}).toArray(function (err, docs) {
            assert.equal(null, err);
            if (err) {
                console.error(err);
                res.send(err);
                return;
            }
            let variables = {
                products: docs,
            }
            res.render('products', variables);
        });
    }

    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////

}); //cierra la parte products




app.get('/cart', function (req, res) {

    console.log()

    console.log("Client entered the cart page");
    const collection = db.collection('cart');


    collection.find({}).toArray(function (err, docs) {
        assert.equal(null, err);
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        var variables = {
            products: docs,


        }
        res.render('shop', variables);
    });


    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////

}); //cierra la parte carrito



//Agregar favoritos
app.post('/api/favoritos', function (request, response) {

    const coleccion = db.collection('products');

    coleccion.updateOne(

        {
            "_id": ObjectId(request.body._id)
        }, {
            $set: {
                "fav": request.body.fav
            }
        }

    );

    response.send("Producto agregado a favoritos");
});


//agregar items al carrito
app.post('/api/comprarProducto', function (request, response) {

    const coleccion = db.collection('cart');
    let producto = {
        brand: request.body.brand,
        reference: request.body.reference,
        image: request.body.image,
        price: request.body.price
    };

    coleccion.insertOne(producto);
    response.send("Producto agregado al carrito");
});


//borrar items al carrito
app.post('/api/borrarProducto', function (request, response) {

    const coleccion = db.collection('cart');

    coleccion.deleteOne({

        "_id": ObjectId(request.body._id)
    });
    response.send("Producto borrado del carrito");


});


//agregar recibo
app.post('/api/nuevoRecibo', function (request, response) {

    const coleccion = db.collection('bills');
    const carrito = db.collection('cart');


    let bill = {

        name: request.body.name,
        phone: request.body.phone,
        email: request.body.email,
        country: request.body.country,
        state: request.body.state,
        city: request.body.city,
        total: request.body.total
    };

    coleccion.insertOne(bill, {});
    response.send("Compra efefctuada");

    carrito.remove();


});