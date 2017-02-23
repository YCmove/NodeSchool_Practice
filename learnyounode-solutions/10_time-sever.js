'use strict'

const net = require('net');
const port = Number(process.argv[2]);

const server = net.createServer(socket => {
    const currentDate = new Date();

    function format(num) {
        return num < 10 ? '0' + num : num;
    }

    // NOTICE getMonth() issue : January is 0, February is 1
    const timeStr =
        currentDate.getFullYear() + '-' +
        format(currentDate.getMonth() + 1) + '-' +
        format(currentDate.getDate()) + ' ' +
        format(currentDate.getHours()) + ':' +
        format(currentDate.getMinutes()) + '\n';

    socket.end(timeStr)
});

server.listen(port);