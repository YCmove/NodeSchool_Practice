'use strict'

const fs = require('fs');

function myFilter(dirName, filterName, callback) {
    fs.readdir(dirName, (err, files) => {
        if (err) {
            return callback(err);
        };
        const selectedFiles = files.filter(item => item.indexOf('.' + filterName) > -1);
        callback(null, selectedFiles);
    });
}

module.exports = myFilter;