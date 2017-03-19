module.exports = function (req, res) {
    let db = require("../models")
    db.User.findAll()
        .then(function (result) {
            res.send(result)
        })
}
