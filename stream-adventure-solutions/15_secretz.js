'use strict'

const tar = require('tar');
const fs = require('fs');
const crypto = require('crypto');
const zlib = require('zlib');
// const through = require('through');
const through = require('through2');
// const concat = require('concat-stream');

let parser = tar.Parse();

let cipherName = process.argv[2];
let cipherPassphrase = process.argv[3];
let decipherStream = crypto.createDecipher(cipherName, cipherPassphrase);
let zipStream = zlib.createGunzip();

parser.on('entry', e => {
    // console.log(e);
    if (e.type !== 'File') return;

    var md5Stream = crypto.createHash('md5', {
        encoding: 'hex'
    });

    // 1. use concat-stream module
    // e.pipe(md5Stream).pipe(concat(function (hash) {
    //     console.log(hash + ' ' + e.path);
    // }))

    // 2. use through module
    // e.pipe(md5Stream)
    //     .pipe(through(function (buf) {
    //         this.queue(buf.toString() + ' ' + e.path + '\n');
    //     }, function () {
    //         this.queue(null);
    //     }))
    //     .pipe(process.stdout);

    // 3. use through2 module
    e.pipe(md5Stream)
        .pipe(through(function (chunk, enc, callback) {
            this.push(chunk.toString() + ' ' + e.path + '\n');
            callback();
        }))
        .pipe(process.stdout);
});

process.stdin.pipe(decipherStream)
    .pipe(zipStream)
    .pipe(parser);