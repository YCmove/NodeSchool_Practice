'use strict'

const fs = require('fs');

const file = fs.readFileSync(process.argv[2]);
const lineArray = file.toString().split('\n');

// SOLUTION 2
// const file = fs.readFileSync(process.argv[2], 'utf8');
// const lineArray = file.split('\n');

console.log(lineArray.length - 1);