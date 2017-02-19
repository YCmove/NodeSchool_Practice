'use strict'

const combine = require('stream-combiner');
const split = require('split');
const through = require('through2');
const zlib = require('zlib');



module.exports = function () {
    // we use if (reformedObj) to check the existence of previous object
    // so in here, don't use Object Literal : reformedObj = {};
    let reformedObj = null;

    function write(chunk, enc, next) {
        if (chunk.length === 0) return next();

        let obj = JSON.parse(chunk);
        // console.log('write: ', obj);
        if (obj.type === 'genre') {
            if (reformedObj) {
                // previous object(completed one) existed, push it out
                this.push(JSON.stringify(reformedObj) + '\n');
            }

            // wrong way : you need to create whole new object
            // reformedObj.name = obj.name;
            // reformedObj.books = [];

            // new genre object
            reformedObj = {
                name: obj.name,
                books: []
            };
        } else if (obj.type === 'book') {
            reformedObj.books.push(obj.name)
        }

        next();
    }

    function end(next) {
        if (reformedObj) {
            this.push(JSON.stringify(reformedObj) + '\n');
        }
        next();
    }

    return combine(
        // read newline-separated json,
        split(),
        // group books into genres,
        through(write, end),
        // then gzip the output
        zlib.createGzip()
    );
};