'use strict'

// console.log(process.argv[2]);

const fs = require('fs');
const dir = process.argv[2];

fs.createReadStream(dir).pipe(process.stdout);