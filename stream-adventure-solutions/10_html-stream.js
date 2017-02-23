'use strict'

const trumpet = require('trumpet');
const through = require('through');
const fs = require('fs');

let tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);

let stream = tr.selectAll('.loud').createStream();

stream.pipe(through(toUpper)).pipe(stream);

function toUpper(buffer) {
    this.queue(buffer.toString().toUpperCase());
}

// OFFICIAL SOLUTION

// var loud = tr.select('.loud').createStream();
//   loud.pipe(through(function (buf, _, next) {
//       this.push(buf.toString().toUpperCase());
//       next();
//   })).pipe(loud);

//   process.stdin.pipe(tr).pipe(process.stdout);