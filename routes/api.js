let route = require('express').Router()
let models = require('../models')
let api = require('../controller/api')

route.get('/users', api.getAllUser)

route.get('/users/:id', api.getUserById)

route.post('/users', api.createUser)

route.delete('/users/:id', api.deleteUser)

route.put('/users/:id', api.editUser)

module.exports = route
