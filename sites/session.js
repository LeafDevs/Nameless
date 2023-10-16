module.exports = {
    name: '/session',
    type: 1,
    callback(req, res) {
        res.json(req.session)
    }
}