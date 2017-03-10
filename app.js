var express = require ('express')
var app = express()
var models  = require('./models')
var route = require('./router/route')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api',route)

app.listen(3000)
