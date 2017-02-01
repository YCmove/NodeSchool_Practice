'use strict'

const http = require('http');
const bl = require('bl');
const urls = process.argv.slice(2);

let responses = urls.map(item => new GetData(item));

function GetData(url) {
    return new Promise((resolove, reject) => {
        http.get(url, res => {
            res.pipe(bl((err, data) => {
                if (err) throw err;
                resolove(data.toString());
            }));
        }).on('error', error => reject(error));
    })
}

Promise.all(responses).then(msgs => msgs.forEach(item => console.log(item)));