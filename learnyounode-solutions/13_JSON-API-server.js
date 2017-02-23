'use strict'

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((request, response) => {
    //WAY1
    response.setHeader("Content-Type", "application/json");
    //WAY2
    // res.writeHead(200, { 'Content-Type': 'application/json' })
    if (request.method === 'GET') {
        let reqUrl = url.parse(request.url);
        response.end(JSON.stringify(handleReq(reqUrl)));
    } else {
        res.writeHead(404)
        response.end('need a GET request\n');
    }
});

function handleReq(urlObj) {
    const dateObj = querystring.parse(urlObj.query);
    let date = new Date(dateObj.iso);

    switch (urlObj.pathname) {
        case '/api/parsetime':
            return {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            };
            break;

        case '/api/unixtime':
            return {
                'unixtime': date.getTime()
            };
            break;
        default:
            console.log('default: ', urlObj);
    }
}



server.listen(Number(process.argv[2]));