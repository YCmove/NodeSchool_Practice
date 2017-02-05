'use strict'

const Emitter = require('./emitter');
const emtr = new Emitter();
console.log(emtr);

emtr.on('jump', function () {
    console.log('jump listener 1');
});
console.log(emtr);

emtr.on('jump', function () {
    console.log('jump listener 2');
});

console.log(emtr);

emtr.emit('jump');