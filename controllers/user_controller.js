let models    = require('../models')

var hello = function(req, res){
  if (req.query.name == undefined) {
    res.send({title: 'Hello!', answer: req.query.name})
  } else  {
    res.send({title: 'Hello!', answer: req.query.name})
  }
}

var get_user = function(req, res){
  models.User.findAll().then(function (results){
    res.send(results)
  })
}

var post_user = function(req, res){
  models.User.create(
    {
      firstname : req.body.firstname,
      lastname:req.body.lastname,
      email: req.body.email,
      phone:req.body.phone
    }).then(function(data){
      res.send(data);
  })
}

var get_id_user = function(req, res){
  var idGet = req.params.id
  models.User.findById(idGet).then(function (results){
    res.send(results)
  })
}

var delete_user = function(req, res){
  var idGet = req.params.id
  models.User.findById(idGet).then(function (results){
    if(results){
      results.destroy({where:{id:req.body.id}})
      res.send(results)
    } else {
      res.send('ERROR!')
    }
  })
}

var put_user = function(req, res){
  var idPut = req.params.id
  models.User.findById(idPut).then(function (data){
    models.User.update(
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
      }, {where:{id: req.params.id}}).then(function (results){
      res.send(data)
      })
    })
}

module.exports = {
  hello,
  get_user,
  post_user,
  get_id_user,
  delete_user,
  put_user
}
