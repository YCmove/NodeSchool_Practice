'use strict'

const through = require('through');

process.stdin.pipe(through(write, end))
    .pipe(process.stdout);

let lines = '';

function write(buffer) {
    lines += buffer.toString();
};

function end() {
    let lineArray = lines.split('\n').map((item, index) => {
        if (index % 2) {
            return item.toUpperCase();
        } else {
            return item.toLowerCase();
        }
    });
    let finalLines = lineArray.reduce((cur, next) => {
        return cur += '\n' + next;
    })
    this.queue(new Buffer(finalLines));
}