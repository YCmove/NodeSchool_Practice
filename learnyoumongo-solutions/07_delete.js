'use strict'

const mongo = require('mongodb').MongoClient;
const dburl = 'mongodb://localhost:27017/' + process.argv[2];

// console.log(process.argv);


mongo.connect(dburl, function (err, db) {
    if (err) throw err;
    var collection = db.collection(process.argv[3]);
    collection.remove({
        _id: process.argv[4]
    }, (err, data) => {
        if (err) throw err;
        // console.log(data);
        db.close();
    });
});