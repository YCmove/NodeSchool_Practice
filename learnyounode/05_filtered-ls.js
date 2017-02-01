'use strict'

const fs = require('fs');
const dir = fs.readdir(process.argv[2], (err, files) => {
    if (err) throw err;
    const selectedFiles = files.filter(item => item.indexOf('.' + process.argv[3]) > -1);
    for (let i = 0; i < selectedFiles.length; i++) {
        console.log(selectedFiles[i]);
    }
});