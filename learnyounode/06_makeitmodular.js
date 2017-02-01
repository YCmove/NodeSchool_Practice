'use strict'

const mymodule = require('./06_mymodule.js');
const dirName = process.argv[2];
const filterName = process.argv[3];

function callback(err, data) {
    if (err) throw err;
    data.forEach(file => console.log(file));
}

mymodule(dirName, filterName, callback);