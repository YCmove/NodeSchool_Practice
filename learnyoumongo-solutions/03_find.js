'use strict'

const mongo = require('mongodb').MongoClient;
const dburl = 'mongodb://localhost:27017/learnyoumongo';

const age = +process.argv[2];
// console.log(typeof process.argv[2]);

mongo.connect(dburl, function (err, db) {
    if (err) throw err;
    var collection = db.collection('parrots');
    collection.find({
        "age": {
            $gt: age
        }
    }).toArray((err, doc) => {
        if (err) throw err;
        console.log(doc);
        db.close();
    });
});