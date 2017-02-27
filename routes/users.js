'use strict'

const express = require('express')
const router = express.Router()
const models = require('../models')
const controllers = require('../controllers/users')

router.get('/users', controllers.listUsers)

router.get('/users/:id', controllers.findOne)

router.post('/users', controllers.saveUsers)

router.delete('/users/:id', controllers.deleteUser)

router.put('/users/:id', controllers.updateUser)

module.exports = router
