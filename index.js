//dependencias

const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = express();
const port = 5500;


app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//conexion de la base de datos
const url = 'mongodb://localhost:27017';
const dbname = 'GuitarCzarDB';

//cliente
const client = new MongoClient(url);
//base de datos
var db = null;


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

console.log()
app.listen(port, function () {
    console.log(`The server is running in: http://localhost:${port}`);
    console.log()
});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


client.connect(function (err) {

    //there was a mistake in the connection
    assert.equal(null, err);
    if (err) console.error(err);


    //conexión exitosa
    console.log()
    console.log("Connection was succesful");
    db = client.db(dbname);
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
    var ObjectId = require('mongodb').ObjectID;



    const collection = db.collection('products');

    if (req.query.object != undefined && req.query._id != undefined) {
        collection.find({

            object: {
                '$eq': req.query.object
            },
            "_id": ObjectId(req.query._id)

        }).toArray(function (err, docs) {
            assert.equal(null, err);
            if (err) {
                console.error(err);
                res.send(err);
                return;
            }
            var variables = {
                products: docs,

            }
            res.render('products', variables);
        });
    }


    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    else if (req.query.object != undefined && req.query._id == undefined) {
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
            var variables = {
                products: docs,

            }
            res.render('products', variables);
        });
    }

    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    else {
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
            res.render('products', variables);
        });


    }

    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////

}); //cierra la parte products




















app.get('/addProduct', function (req, res) {
    const collection = db.collection('products');

    collection.insertMany([{
            object: "guitar",
            brand: "Jackson",
            series: "Pro Series",
            reference: "Monarkh SCG",
            color: "yellow",
            strings: 6,
            price: 749,
            image: "proseriesscg.png"
        },
        {
            object: "amp",
            brand: "Line 6",
            series: "Spider V",
            reference: "240 MkII",
            price: 549,
            image: "spiderv240.png"
        },
        {
            object: "amp",
            brand: "VOX",
            series: "Hybrid",
            reference: "VT20X",
            price: 167,
            image: "voxvt20x.png"
        },
        {
            object: "bass",
            brand: "Jackson",
            series: "JS Series",
            reference: "Spectra JS3Q",
            color: "blue",
            strings: 4,
            price: 349,
            image: "spectrajs3q.png"
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            reference: "Everlast .48mm X12",
            price: 6,
            image: "ernieeverlastpick.png"
        },
        {
            object: "guitar",
            brand: "Dean",
            series: "V Dave Mustaine",
            reference: "Angel of Death",
            color: "silver",
            strings: 6,
            price: 1229,
            image: "deanangeldeath.png"
        },
        {
            object: "bass",
            brand: "Fender",
            series: "Jazz Bass",
            reference: "Purple Sparkle",
            color: "purple",
            strings: 4,
            price: 2500,
            image: "jazzbasspurple.png"
        },
        {
            object: "guitar",
            brand: "Fender",
            series: "Stratocaster",
            reference: "Rarities Flame Koa Top",
            color: "brown",
            strings: 6,
            price: 2499,
            image: "raritiesstratocaster.png"
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            reference: "Musician's tool kit",
            price: 60,
            image: "ernietoolkit.png"
        }, {
            object: "guitar",
            brand: "Fender",
            series: "Telecaster",
            reference: "VINTERA '70s",
            color: "orange",
            strings: 6,
            price: 899,
            image: "vintera70.png"
        },
        {
            object: "accessories",
            brand: "D'Addarío",
            series: "NYXL0984SB",
            reference: "9-84 Gauge",
            price: 20,
            image: "daddarionyxl.png"
        }, {
            object: "guitar",
            brand: "Fender",
            series: "Jazzmaster",
            reference: "American Performer",
            color: "blue",
            strings: 6,
            price: 959,
            image: "americanperfomer.png"
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            series: "Aluminum Bronze",
            reference: "12-54 Gauge",
            price: 10,
            image: "aluminumbronze12-54.png"
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            reference: "Guitar polish",
            price: 6,
            image: "erniepolish.png"
        },
        {
            object: "amp",
            brand: "Dean",
            series: "Acoustic Amp",
            reference: "DA25C 25w",
            price: 149,
            image: "deanda25c.png"
        },
        {
            object: "accessories",
            brand: "Jim Dunlop",
            reference: "Celluloid guitar pick X12",
            price: 6,
            image: "dunlopcelluloidpick.png"
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            series: "Slinky Cobalt",
            reference: "10-46 Gauge",
            price: 27,
            image: "slinkycobalt10-46.png"
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            reference: "Guitar polish + Cloth",
            price: 8,
            image: "erniepolishcloth.png"
        },
        {
            object: "accessories",
            brand: "D'Addarío guitar pick",
            reference: "Duralin black ice X10",
            price: 5,
            image: "addarioduralinpick.png"
        },
        {
            object: "guitar",
            brand: "Jackson",
            series: "Pro Series",
            reference: "Signature Misha Mansoor",
            color: "blue",
            strings: 6,
            price: 799,
            image: "proseriesmansoor.png"
        },
        {
            object: "guitar",
            brand: "Jackson",
            series: "X Series",
            reference: "Dinky",
            color: "black",
            strings: 8,
            price: 599,
            image: "xseriesdinky.png"
        },
        {
            object: "amp",
            brand: "Line 6",
            series: "Spider V",
            reference: "120 MkII",
            price: 429,
            image: "spiderv120.png"
        },
        {
            object: "guitar",
            brand: "Gibson",
            series: "Les Paul",
            reference: "Standard",
            color: "orange",
            strings: 6,
            price: 6499,
            image: "gibsonlespaul.png"
        },
        {
            object: "bass",
            brand: "Ibanez",
            series: "AFR",
            reference: "AFR5WAP",
            color: "brown",
            strings: 5,
            price: 1600,
            image: "ibanezafr.png"
        }
    ], function (err, result) {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }


        res.send("Added a product succesfully");

    });

});