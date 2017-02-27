var express = require('express');
var router = express.Router();
var models = require('../models')


/* GET home page. */
// router.get('/users', function(req, res, next) {
//   res.send('hello world!');
// });

// menampilkan seluruh data user
router.get('/users', function(req, res, next) {
  models.User.findAll().then(function(results) {
    res.send(results)
  })
});

// menampilkan data user berdasarkan id
router.get('/users/:id', function(req, res, next) {
  models.User.findById(req.params.id).then(function(result) {
    res.send(result)
  })
});

// menambahkan data user
router.post('/users', function(req, res, next) {
    models.User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    }).then(function(results) {
      res.send(results)
    })
});

// menghapus data user berdasarkan id
router.delete('/users/:id', function(req, res, next) {
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
});

// update data user berdasarkan id
router.put('/users/:id', function (req, res, next) {
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
})



module.exports = router;
