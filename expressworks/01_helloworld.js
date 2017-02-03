'use strict'

const port = Number(process.argv[2]);
const express = require('express');
let app = express();

app.get('/home', (req, res) => {
    res.end('Hello World!');
});

app.listen(port);