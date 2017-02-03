'use strict'

const port = Number(process.argv[2]);
const offeredpath = process.argv[3];
const path = require('path');
const express = require('express');
let app = express();

app.use(express.static(offeredpath || path.join(__dirname, 'public')));
app.listen(port);

// Use of path module
// path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// Returns: '/foo/bar/baz/asdf'