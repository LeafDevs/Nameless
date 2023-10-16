const Account = require("../utils/Account")

module.exports = {
    name: '/cart',
    type: 1,
    callback(req, res) {
        res.json(req.session.cart || [])
    }
}