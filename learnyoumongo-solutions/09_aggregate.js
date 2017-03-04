'use strict'

const mongo = require('mongodb').MongoClient;
const dburl = 'mongodb://localhost:27017/learnyoumongo';

const size = process.argv[2];
// console.log(process.argv);


mongo.connect(dburl, function (err, db) {
    if (err) throw err;
    var collection = db.collection('prices');
    collection.aggregate([{
        $match: {
            size: size
        }
    }, {
        $group: {
            _id: null,
            avg: {
                $avg: "$price"
            }
        }
    }], (err, data) => {
        if (err) throw err;
        var num = Number(data[0].avg).toFixed(2);
        console.log(num);
        db.close();
    });
});