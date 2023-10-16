module.exports = {
    name: '/shop',
    type: 1, // 1 = GET 2 = POST
    callback(req, res) {
        if(!req.session.cart) {
            req.session.cart = [];
        }
        res.render('shop', {  shown: req.query.shown || false });
    }
}