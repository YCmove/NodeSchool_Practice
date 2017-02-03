'use strict'

const concat = require('concat-stream');
process.stdin.pipe(concat(buffer => {
        process.stdout.write(buffer.toString().split('').reverse().join(''))
    }))