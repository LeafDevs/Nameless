module.exports = {
    name: '/api/cart',
    type: 1, // 1 = GET 2 = POST
    callback(req, res) {
        res.json(req.session.cart || []);
    }
}