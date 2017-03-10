var express = require('express')
var route = express.Router()
var db = require('../models')
var controllers = require('../controller/controllers')

route.get('/users', controllers.getAllData)

route.get('/users/:id', controllers.get_user_By_id  )

route.post('/users', controllers.create_user)

route.delete('/users/:id', controllers.deleteUser)

route.put('/users/:id', controllers.updateUser)


module.exports = route
