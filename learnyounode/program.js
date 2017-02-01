'use strict'

const http = require('http');
const map = require('through2-map');
const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    if (req.method === 'POST') {
        req.on('data', chunk => {
            map(chunk => chunk.toString().toUpperCase());
            req.pipe(res);
        });
    }
});

server.listen(port);