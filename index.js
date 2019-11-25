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

    const collection = db.collection('products');

    if (req.query.object != undefined) {
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
    } else {
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
            image: "proseriesscg.png",
            fav: "false",
            des: "Boasting majestic Jackson style, the Pro SCG is available in a stunning Gold Member finish with a matching 3x3 AT-1 headstock that is elegantly topped off with white body, neck and headstock binding, a black switch tip and chome hardware."
        },
        {
            object: "amp",
            brand: "Line 6",
            series: "Spider V",
            reference: "240 MkII",
            price: 549,
            image: "spiderv240.png",
            fav: "false",
            des: 'Take no prisoners with the Spider V 240 MkII and its full-spectrum stereo tone, 240 watts of power, dual 12" speakers, wireless connectivity, and Line 6 FBV 3 Foot Controller compatibility. '
        },
        {
            object: "amp",
            brand: "VOX",
            series: "Hybrid",
            reference: "VT20X",
            price: 167,
            image: "voxvt20x.png",
            fav: "false",
            des: "Highly sophisticated DSP imbues the Vox VT20X with an enormous level of processing power. You'll hear the difference in the VT20X's sampling rate and sound of each of its 11 realistic amp models and in the quality of its 13 onboard effects."
        },
        {
            object: "bass",
            brand: "Jackson",
            series: "JS Series",
            reference: "Spectra JS3Q",
            color: "blue",
            strings: 4,
            price: 349,
            image: "spectrajs3q.png",
            fav: "false",
            des: 'The JS Series Spectra Bass JS3Q features a 12"–16" compound-radius fingerboard for ultimate playability. The laurel fingerboard is rounder near the nut for holding down the groove. As you head up to the solo range of the instrument, the radius flattens out for easier runs and string bends.'
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            reference: "Everlast .48mm X12",
            price: 6,
            image: "ernieeverlastpick.png",
            fav: "false",
            des: 'Ernie Ball Everlast picks feature highly durable Delrin material for a more secure, non-slip surface.'

        },
        {
            object: "guitar",
            brand: "Dean",
            series: "V Dave Mustaine",
            reference: "Angel of Death",
            color: "silver",
            strings: 6,
            price: 1229,
            image: "deanangeldeath.png",
            fav: "false",
            des: 'This axe of darkness comes loaded with screaming Dave Mustaine Live Wire USA active humbuckers, TonePros bridge, Grover tuners, and Dunlop flush-mount straplocks for ultimate onstage performance. Black hardware'
        },
        {
            object: "bass",
            brand: "Fender",
            series: "Jazz Bass",
            reference: "Purple Sparkle",
            color: "purple",
            strings: 4,
            price: 2500,
            image: "jazzbasspurple.png",
            fav: "false",
            des: 'Fender’s Adam Clayton Jazz Bass puts his rock-solid sound and style in your hands, with elegant appointments and authentic Fender tone, including potent Fender Custom Shop pickups and a stunning limited-edition Purple Sparkle gloss finish with matching headstock.'
        },
        {
            object: "guitar",
            brand: "Fender",
            series: "Stratocaster",
            reference: "Rarities Flame Koa Top",
            color: "brown",
            strings: 6,
            price: 2499,
            image: "raritiesstratocaster.png",
            fav: "false",
            des: 'The Fender Rarities Series Flame Koa Top Stratocaster is built from premium woods. Its ash body is topped with eye-popping flamed koa, a gorgeous departure from the grain of alder or ash.'
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            reference: "Musician's tool kit",
            price: 60,
            image: "ernietoolkit.png",
            fav: "false",
            des: "Be prepared with the Ernie Ball Musician's Tool Kit! Grab this value-packed accessory kit, and you'll be prepared for almost any guitar or bass maintenance task. You get a microfiber polish cloth and Wonder Wipes to keep your guitar or bass looking like new."
        }, {
            object: "guitar",
            brand: "Fender",
            series: "Telecaster",
            reference: "VINTERA '70s",
            color: "orange",
            strings: 6,
            price: 899,
            image: "vintera70.png",
            fav: "false",
            des: "The Fender Vintera '70s Telecaster Deluxe is loaded with a 6-saddle, strings-through-body Strat bridge. It feels comfortable when you're resting your picking hand against it. And the individual saddles allow you to dial in spot-on intonation, even if you're using altered or open tunings."
        },
        {
            object: "accessories",
            brand: "D'Addarío",
            series: "NYXL0984SB",
            reference: "9-84 Gauge",
            price: 20,
            image: "daddarionyxl.png",
            fav: "false",
            des: "D'Addario XT Bass Nickel Plated Steel strings combine our most popular electric bass guitar alloy with an advanced corrosion resistance treatment on every string in the set, preserving the natural tone and feel of uncoated strings. Available in a variety of gauges for 4 and 5 string, long scale basses."
        }, {
            object: "guitar",
            brand: "Fender",
            series: "Jazzmaster",
            reference: "American Performer",
            color: "blue",
            strings: 6,
            price: 959,
            image: "americanperfomer.png",
            fav: "false",
            des: "Created for the American Performer series, the Yosemite single-coil pickups found on this Jazzmaster deliver the clarity and detail vintage Jazzmaster tone is known for. They're wound slightly hotter than vintage JM pickups and feature flat-staggered pole pieces for exceptionally balanced output across all strings."
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            series: "Aluminum Bronze",
            reference: "12-54 Gauge",
            price: 10,
            image: "aluminumbronze12-54.png",
            fav: "false",
            des: 'Ernie Ball Aluminum Bronze Acoustic Guitar Strings feature more projection and clarity than traditional bronze strings, while also providing improved corrosion resistance.'
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            reference: "Guitar polish",
            price: 6,
            image: "erniepolish.png",
            fav: "false",
            des: "Ernie Ball's proprietary polish formula is oil free and won't leave a powdery residue on your instrument. Spray on the cloth and wipe off in a circular motion for a streak free shine. Safe on most woods and finishes. Contains silicone."
        },
        {
            object: "amp",
            brand: "Dean",
            series: "Acoustic Amp",
            reference: "DA25C 25w",
            price: 149,
            image: "deanda25c.png",
            fav: "false",
            des: "The Dean DA25C is a robust and versatile 25 Watt Acoustic Guitar Amplifier. Featuring an 8'' driver and a 2.5'' tweeter, this dual channel premium amplifier is the ideal choice for small to medium venue performances, as well as practice and recording."
        },
        {
            object: "accessories",
            brand: "Jim Dunlop",
            reference: "Celluloid guitar pick X12",
            price: 6,
            image: "dunlopcelluloidpick.png",
            fav: "false",
            des: "Using the highest quality celluloid and precise craftsmanship, we've created a pick that plays smoothly with a snappy attack that sounds clear and round."
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            series: "Slinky Cobalt",
            reference: "10-46 Gauge",
            price: 27,
            image: "slinkycobalt10-46.png",
            fav: "false",
            des: "Ernie Ball Cobalt Slinky Electric Guitar Strings provide an extended dynamic range, incredible harmonic response, increased low end, and crisp, clear highs. Cobalt provides a stronger magnetic relationship between pickups and strings than any other alloy previously available."
        },
        {
            object: "accessories",
            brand: "ErnieBall",
            reference: "Guitar polish + Cloth",
            price: 8,
            image: "erniepolishcloth.png",
            fav: "false",
            des: "Ernie Ball's proprietary polish formula is oil free and won't leave a powdery residue on your instrument. Spray on the cloth and wipe off in a circular motion for a streak free shine."
        },
        {
            object: "accessories",
            brand: "D'Addarío guitar pick",
            reference: "Duralin black ice X10",
            price: 5,
            image: "addarioduralinpick.png",
            fav: "false",
            des: "Black Ice Picks feature a custom oversized jazz shape that is designed for speed picking in situations where precise articulation is required."
        },
        {
            object: "guitar",
            brand: "Jackson",
            series: "Pro Series",
            reference: "Signature Misha Mansoor",
            color: "blue",
            strings: 6,
            price: 799,
            image: "proseriesmansoor.png",
            fav: "false",
            des: 'Combining the DNA from the time-tested Dinky™ and Soloist™ models,these familiar-feeling, thoroughly modern masterpieces seamlessly meld contemporary elements with classic features for a truly unique sonic identity with the Juggernaut.'
        },
        {
            object: "guitar",
            brand: "Jackson",
            series: "X Series",
            reference: "Dinky",
            color: "black",
            strings: 8,
            price: 599,
            image: "xseriesdinky.png",
            fav: "false",
            des: "With the Jackson X Series DKAF7 Dinky 7-string solidbody electric guitar, you'll enjoy all the speed-inducing design, full-throated tone, and focused-sounding lows of a multi-scale instrument in an affordable package. The guitar's warm-sounding mahogany arched body feels great and looks even better."
        },
        {
            object: "amp",
            brand: "Line 6",
            series: "Spider V",
            reference: "120 MkII",
            price: 429,
            image: "spiderv120.png",
            fav: "false",
            des: 'Do you want to plug in and rock? Or maybe you like tweaking parameters until you’ve dialed in the perfect sound. Either way, the Line 6 Spider V 120 MkII has something to offer every player — it can conjure up nearly any tone you can imagine.'
        },
        {
            object: "guitar",
            brand: "Gibson",
            series: "Les Paul",
            reference: "Standard",
            color: "orange",
            strings: 6,
            price: 6499,
            image: "gibsonlespaul.png",
            fav: "false",
            des: "Gibson Custom Shop is the pinnacle of craftsmanship, quality, and sound excellence. Each instrument celebrates Gibson's legacy through accuracy, authenticity and attention to detail."
        },
        {
            object: "bass",
            brand: "Ibanez",
            series: "AFR",
            reference: "AFR5WAP",
            color: "brown",
            strings: 5,
            price: 1600,
            image: "ibanezafr.png",
            fav: "false",
            des: 'In the early 90’s, Ibanez broke into the high-end boutique bass market with it’s unique concept of Affirma bass. The compact and light weight body, designed by Swiss Luither Rolf Spuler resulted in a bass with and elegant feel enhanced by its beautiful streamline shape.'
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