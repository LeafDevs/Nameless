
const fs = require('fs');

module.exports = {
    name: "/api/v1/accounts",
    type: 1,
    callback(req, res) {
        res.json(JSON.parse(fs.readFileSync('accounts.json', 'utf-8')))
    }
}