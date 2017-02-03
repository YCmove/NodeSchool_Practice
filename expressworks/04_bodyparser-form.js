'use strict'

const port = Number(process.argv[2]);
const bodyparser = require('body-parser');
const express = require('express');
let app = express();

app.use(bodyparser.urlencoded({
    extended: false
}));

app.post('/form', (req, res) => {
    res.end(req.body.str.split('').reverse().join(''))
});

app.listen(port);