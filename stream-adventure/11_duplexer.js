'use strict'

const duplexer = require('duplexer2');
const spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
    // console.log(cmd, args);
    const ls = spawn(cmd, args);
    return duplexer(ls.stdin, ls.stdout);
}