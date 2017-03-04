'use strict'

const mongo = require('mongodb').MongoClient;
const dburl = 'mongodb://localhost:27017/learnyoumongo';

// console.log(process.argv);


mongo.connect(dburl, function (err, db) {
    if (err) throw err;
    var collection = db.collection('parrots');
    collection.count({
        age: {
            $gt: +process.argv[2]
        }
    }, (err, count) => {
        if (err) throw err;
        console.log(count);
        db.close();
    });
});