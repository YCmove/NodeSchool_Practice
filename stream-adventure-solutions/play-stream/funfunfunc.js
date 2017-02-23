'use strict'

const fs = require('fs');
const highland = require('highland');

highland(fs.createReadStream('list.csv', 'utf8'))
    .split()
    .map(line => line.split(','))
    .map(part => ({
        name: part[0],
        number: part[1],
        gender: part[2],
        age: part[3]
    }))
    .each(console.log);



// const stupidNumberStream = {
//     each: (callback) => {
//         setTimeout(() => callback(1), 1000);
//         setTimeout(() => callback(2), 2000);
//         setTimeout(() => callback(3), 3000);
//     }
// }

// createStupidNumberStream.each(console.log);