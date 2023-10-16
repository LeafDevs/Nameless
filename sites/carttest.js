const Account = require("../utils/Account");

module.exports = {
    name: '/carttest',
    type: 1,
    callback(req, res) {

        let cart;

        console.log(req.session);



        if(req.session.username) {
            cart = Account.loadAccounts()[req.session.username]['cart'];
        } else {
            cart = req.session.cart || [];
        }

        if(cart != []) {
            let items = require("../items.json");
            let cartItems = [];

            for(let i = 0; i < cart.length; i++) {
                cartItems.push(items[cart[i]]);
            }
            res.render('carttest', { cart: cartItems });

            console.log(cartItems)
        } else {
            console.log(cartItems)
            res.render('carttest', { cart: []})
        }
    }
}