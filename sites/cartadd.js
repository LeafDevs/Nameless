const Account = require("../utils/Account");
const fs = require("fs");

module.exports = {
    name: '/shop/cart/add/:id',
    type: 1,
    callback(req, res) {
        // rewrite the orginal code to use the new Account class
        console.log(req.params);
        if(req.session.username) {
            let account = Account.getAccount(req.session.username);
        account['cart'].push(req.params.id)
        // save account to the user data file
        let accounts = Account.loadAccounts();

        
        
        // get key value of account
        let key = Object.keys(accounts).find(key => accounts[key] === account);

        console.log(key)
        

       // fs.writeFileSync('accounts.json', JSON.stringify(accounts), 'utf-8')
        } else {
            if(!req.session.cart) {
                req.session.cart = []
            }
            req.session.cart.push(req.params.id)
        }
        res.redirect('/shop')
    }
}