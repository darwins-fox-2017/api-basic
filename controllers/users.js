const models = require('../models')

module.exports = {
  listUsers: function (req, res) {
    models.User.findAll().then(function (users) {
      res.json(users)
    })
  },
  findOne: function (req, res) {
    models.User.findById(req.params.id).then(function (user) {
      res.json(user)
    })
  },
  saveUsers: function (req, res) {
    console.log(req)
    models.User.create({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone
    }).then(function (user) {
      res.json(user)
    }).catch(function (err) {
      res.send(err)
    })
  },
  deleteUser: function (req, res) {
    models.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      res.send('User has been deleted')
    }).catch(function (err) {
      res.send(err)
    })
  },
  updateUser: function (req, res) {
    models.User.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      res.send('User has been updated')
    }).catch(function (err) {
      res.send(err)
    })
  }
}
