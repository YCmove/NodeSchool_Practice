'use strict'

const http = require('http');
const fs = require('fs');
const port = Number(process.argv[2]);
const dir = process.argv[3];
const readable = fs.createReadStream(dir);

const server = http.createServer((req, res) => {
    // SOLUTION 1
    // readable.on('data', chunk => {
    //     res.end(chunk);
    // });

    // SOLUTION 2
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    readable.pipe(res);
});

server.listen(port);