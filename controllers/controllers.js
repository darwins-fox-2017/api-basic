var models = require('../models');

var get_users = function(req, res, next) {
  models.User.findAll().then(function(results) {
    res.send(results)
  })
}

var get_user_id = function(req, res, next) {
  models.User.findById(req.params.id).then(function(result) {
    res.send(result)
  })
}

var add_user = function(req, res, next) {
  models.User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  }).then(function(results) {
    res.send(results)
  })
}

var delete_user_id = function(req, res, next) {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(results) {
    // console.log(results);
    res.send(`user id ${req.params.id} deleted`)
  }).catch(function(err) {
    console.log(err);
  })
}

var update_user = function (req, res, next) {
  models.User.update({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  },
  {
  where: {
    id: req.params.id
  }
}).then(function(result) {
  res.send(`data has been updated`)
})
}

module.exports = {
  get_users,
  get_user_id,
  add_user,
  delete_user_id,
  update_user
}
