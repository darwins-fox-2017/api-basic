var db = require('../models')

module.exports = {
  getAllData : function(req, res){
    db.User.findAll().then(function(data){
      res.send(data)
    })
  },
create_user : function(req, res) {
    db.User.create({
      username:req.body.username,
      password:req.body.password
    }).then(function(data) {
      res.send(data)
    })
  },
get_user_By_id : function(req, res){
    db.User.findById(req.params.id).then(function(data){
      res.send(data)
    })
  },
deleteUser : function(req, res){
    db.User.destroy({
      where : {
        id : req.params.id
      }
    }).then(function(data){
      res.send('DELETE')
    })
  },
updateUser : function(req, res){
    db.User.findById(req.params.id).then(function(data){
        data.update({
          username:req.body.username,
          password:req.body.password
        }).then(function(){
          res.send('Berhasil')
        })
    })
  }
}
