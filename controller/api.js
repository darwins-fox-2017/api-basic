var models = require('../models')

var api = {}

api.getUserById = function(req, res) {
  models.User.findById(req.params.id).then(function(User) {
    res.json(User)
  })
}

api.getAllUser = function(req, res) {
  models.User.findAll().then(function(result) {
    res.json(result)
  })
}

api.createUser = function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function(users) {
    res.send(users)
  })
}

api.deleteUser = function(req, res) {
  models.User.destroy({
    where: {id: req.params.id}
  }).then(function(status) {
    res.status(200).send({
      'status': status,
      'message': 'Data with id ' + req.params.id + ' has been deleted'
    })
  })
}

api.editUser = function(req, res) {
  models.User.update({username: req.body.username}, {where: {id: req.params.id}}).then(function(user) {
    res.send(user)
  })
}

module.exports = api
