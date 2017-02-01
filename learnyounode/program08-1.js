'use strict'

const http = require('http');
const url = process.argv[2];
let receivedData = '';

http.get(url, res => {
    res.setEncoding('utf8');
    res.on('data', data => {
        receivedData += data;
        // console.log(receivedData);
    });
    res.on('error', console.error);
    res.on('end', end => {
        console.log(receivedData.length);
        console.log(receivedData);
    });
}).on('error', console.error);