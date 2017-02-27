var express = require('express')
var router = express.Router()
var Model = require('../models')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Model.User.findAll()
    .then(function (users) {
      res.json(users)
    })
})

router.get('/:id', function (req, res, next) {
  console.log(req.params.id)
  Model.User.findById(req.params.id).then(function (user) {
    res.send(user)
  })
})

router.post('/', function (req, res, next) {
  Model.User.create({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(function (user) {
      res.send(user)
    })
})

router.delete('/:id', function (req, res, next) {
  Model.User.destroy(req.body.id).then(function (user) {
    res.send('User deleted')
  })
})

router.put('/:id', function (req, res, next) {
  Model.User.update({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }, {where: {id: req.params.id}}).then(function () {
    Model.User.findById(req.params.id).then(function (user) {
      res.send(user)
    })
  })
})

module.exports = router
