'use strict'

const port = Number(process.argv[2]);
const express = require('express');
const path = require('path');
let app = express();

app.set('view engine', 'pug');
app.set('views', process.argv[3]);
app.get('/home', (req, res) => {
    res.render('index', {
        date: new Date().toDateString()
    });
});

app.listen(port);