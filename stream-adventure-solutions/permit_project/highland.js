'use strict'

const fs = require('fs');
const highland = require('highland');

highland(fs.createReadStream('mountain_permits_201701.csv', 'utf8'))
    .split()
    .map(line => line.split(','))
    .map(part => ({
        date: part[1],
        days: part[2],
        number: part[3],
        area: part[4]
    }))
    .each(console.log);