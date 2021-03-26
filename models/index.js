const mongoose = require('mongoose')

if (process.env.NODE_ENV === 'development') {

    const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/pawtel'

    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useUnifiedTopology: false
    })

    const db = mongoose.connection

    db.once('open', () => {
        console.log(`mongoDB connection @ ${db.host}:${db.port}`)
    })

    db.on('error', () => {
        console.error(`someting has gone wrong with the DB \n ${err}`)
    })
} else {
    // mongodb atlas code here
    const MongoClient = require('mongodb').MongoClient;

    const uri = process.env.ATLAS_URI;
    console.log(uri, ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    });

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useUnifiedTopology: false
    })

    const db = mongoose.connection

    db.once('open', () => {
        console.log(`mongoDB connection @ ${db.host}:${db.port}`)
    })

    db.on('error', (err) => {
        console.error(`someting has gone wrong with the DB \n ${err}`)
    })
}
