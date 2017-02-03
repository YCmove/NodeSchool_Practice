'use strict'

const http = require('http');
const map = require('through2-map');
const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    if (req.method === 'POST') {
        req.pipe(map(transform))
            .pipe(res);
    } else {
        req.end('need a POST request');
    }
});

function transform(chunk) {
    return chunk.toString().toUpperCase();
}

server.listen(port);