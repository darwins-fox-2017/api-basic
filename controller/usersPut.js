module.exports = function (req, res) {
    let db = require("../models")
    db.User.findById(req.params.userId)
        .then(function (result) {
            result.update({
                    name: req.body.name,
                    hobby: req.body.hobby,
                    address: req.body.address
                })
                .then(function () {
                    console.log(`data sudah dirubah`);
                })
        })
}
