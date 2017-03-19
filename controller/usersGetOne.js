module.exports = function (req, res) {
    let db = require("../models")
    db.User.findById(req.params.userId)
        .then(function (result) {
            res.send(result)
        })
}
