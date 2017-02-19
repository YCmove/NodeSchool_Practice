'use strict'

const duplex = require('duplexer2');
const through = require('through2').obj;
//use objectMode:true if you are processing non-binary streams (or just use through2.obj())

function exportFn(counter) {

    let counts = {};

    return duplex({
        objectMode: true
    }, through(write, end), counter);

    function write(chunk, enc, callback) {

        if (counts[chunk.country]) {
            counts[chunk.country]++;
        } else {
            counts[chunk.country] = 1;
        }

        callback();
    }

    function end() {
        counter.setCounts(counts);
    }


};




module.exports = exportFn;