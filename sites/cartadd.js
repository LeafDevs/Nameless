const Account = require("../utils/Account");
const fs = require("fs");

module.exports = {
    name: '/shop/cart/add/:id',
    type: 1,
    callback(req, res) {
        console.log(req.params);
        if(req.session.username) {
            let account = Account.getAccount(req.session.username);
        account['cart'].push(req.params.id)
        let accounts = Account.loadAccounts();

        
        
        let key = Object.keys(accounts).find(key => accounts[key] === account);

        console.log(key)
        } else {
            if(!req.session.cart) {
                req.session.cart = []
            }
            req.session.cart.push(req.params.id)
        }
        res.redirect('/shop')
    }
}