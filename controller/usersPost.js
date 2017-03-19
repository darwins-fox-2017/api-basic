module.exports = function (req, res) {
    let db = require("../models")
    db.User.create({
            name: req.body.name,
            hobby: req.body.hobby,
            address: req.body.address
        })
        .then(function (task) {
            console.log('oke coy');
        })
        .catch(function (err) {
            console.log(err.message);
        })
}
