module.exports = {
    name: '/api/cart/remove/:id/:shown',
    type: 1,
    callback(req, res) {
        if(req.session.username) {
            let account = Account.loadAccounts();
        console.log(account)
        console.log(account[req.session.username]['cart'])
        account[req.session.username]['cart'].splice(account[req.session.username]['cart'].indexOf(req.params.id), 1)
        console.log(account[req.session.username]['cart']);
        fs.writeFileSync('accounts.json', JSON.stringify(account), 'utf-8')
        } else {
            req.session.cart.splice(req.session.cart.indexOf(req.params.id), 1)
        }
        res.redirect('/shop?shown=' + req.params.shown)
    }
}