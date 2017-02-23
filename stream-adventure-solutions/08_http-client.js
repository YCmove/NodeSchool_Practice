'use strict'

const postUrl = 'http://localhost:8099';
const http = require('http');
const request = require('request');

let r = request.post(postUrl);
// request.post() is a readable + writable stream

// WAY 1
// process.stdin.pipe(r);
// r.pipe(process.stdout);

// WAY 2: SHORT WAY
process.stdin.pipe(r).pipe(process.stdout);