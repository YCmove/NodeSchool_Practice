'use strict'

const http = require('http');
const through = require('through');

const server = http.createServer((request, response) => {
    // response.setHeader('content-type', 'text/plain');
    // if (request.method === 'POST') {
    //     request.pipe(through(transform))
    //         .pipe(response);
    // } else {
    //     response.end('need a POST request');
    // }
});