'use strict'

const myEmitter = require('./emitter');
const nodeEmitter = require('events');
const eventsConfig = require('./config').events;

// const emtr = new myEmitter();
const emtr = new nodeEmitter();

emtr.on(eventsConfig.ONFILECLOSED, function () {
    console.log('ONFILECLOSED listener 1');
});

emtr.on(eventsConfig.ONFILECLOSED, function () {
    console.log('ONFILECLOSED listener 2');
});

emtr.emit(eventsConfig.ONFILECLOSED);