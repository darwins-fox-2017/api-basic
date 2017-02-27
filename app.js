"use strict"
const express = require('express');
const router  = require('./routes/api');
let app       = express();
var bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router)

app.listen(3000);
