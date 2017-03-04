'use strict'

const mongo = require('mongodb').MongoClient;
const dburl = 'mongodb://localhost:27017/learnyoumongo';

// const age = +process.argv[2];
// console.log(process.argv);

let document = {
    firstName: process.argv[2] || null,
    lastName: process.argv[3] || null
};

mongo.connect(dburl, function (err, db) {
    if (err) throw err;
    var collection = db.collection('parrots');
    collection.insert(document, (err, data) => {
        if (err) throw err;
        console.log(JSON.stringify(document));
        db.close();
    });
});