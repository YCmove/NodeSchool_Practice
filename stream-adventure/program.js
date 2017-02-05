'use strict'

const duplex = require('duplexer2');
const util = require('util');
const through = require('through')

function exportFn(counter) {
    // var obj = counter.toString();
    // console.trace(counter);
    // console.log(util.inspect(counter))
    // console.log(JSON.parse(obj, null, 4));
    return duplex(through(writable), counter);
};



function writable(obj) {
    // console.log('writable : ', obj);
    let countObj = {};
    if (countObj[obj.country]) {
        countObj[obj.country]++;
    } else {
        countObj[obj.country] = 1;
    }
    console.log('countObj', countObj);
    return countObj;
}

module.exports = exportFn;