let db = require('./models')



// sequelize model: create--name User--attributes 'name:string, hobby:string, address:string'

db.User.create({
        name: 'agnes',
        hobby: 'shopping',
        address: 'tangerang'
    })
    .then(function (task) {
        console.log('oke coy');
    })
    .catch(function (err) {
        console.log(err.message);
    })

db.User.create({
        name: 'endy',
        hobby: 'tidur',
        address: 'jakarta'
    })
    .then(function (task) {
        console.log('oke coy');
    })
    .catch(function (err) {
        console.log(err.message);
    })
