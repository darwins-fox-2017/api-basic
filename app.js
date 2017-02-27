'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

let users = require('./routes/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', users)

app.listen(3000)

module.exports = app
