'use strict'

// taiwan towns json api https://works.ioa.tw/weather/api/all.json

const fs = require('fs');
const csv = require('csvtojson');

let readableStream = fs.createReadStream('./mountain_permits_201701.csv');

readableStream.on('data', chunk => {
    // console.log(chunk);
    // toJson(chunk.toString());
});

readableStream.on('end', () => {
    console.log('end here');
});


// from string
function toJson(csvStr) {
    csv({
            noheader: true
        })
        .fromString(csvStr)
        .on('csv', (csvRow) => { // this func will be called 3 times 
            console.log(csvRow) // => [1,2,3] , [4,5,6]  , [7,8,9] 
        })
        .on('done', () => {
            //parsing finished 
            console.log('csv done');
        })

}

// from stream
csv()
    .fromStream(readableStream)
    .on('csv', (csvRow) => {
        console.log('csvRow: ', csvRow);
    })
    .on('done', (error) => {
        console.log('csv done');
    })