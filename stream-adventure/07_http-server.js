'use strict'

const http = require('http');
const through = require('through');

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/plain');
    if (request.method === 'POST') {
        request.pipe(through(transform))
            .pipe(response);
    } else {
        response.end('need a POST request');
    }
});

function transform(buffer) {
    this.queue(buffer.toString().toUpperCase());
}

server.listen(Number(process.argv[2]));

// STANDER SOLUTION
//   var http = require('http');
//   var through = require('through2');

//   var server = http.createServer(function (req, res) {
//       if (req.method === 'POST') {
//           req.pipe(through(function (buf, _, next) {
//               this.push(buf.toString().toUpperCase());
//               next();
//           })).pipe(res);
//       }
//       else res.end('send me a POST\n');
//   });
//   server.listen(parseInt(process.argv[2]));