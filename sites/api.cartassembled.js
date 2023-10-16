module.exports = {
    name: '/api/cartitems',
    type: 1,
    callback(req, res) {
        if(!req.session.cart) {
            req.session.cart = [];
        }
        let cart = req.session.cart || [];

        console.log("cart: " + cart.length)

        if(cart.length == 0) {

            res.json(cart)
       
        } else {
            let items = require("../items.json");
            let cartItems = [];

            for(let i = 0; i < cart.length; i++) {
                cartItems.push(items[cart[i]]);
            }
            res.json(cartItems)
        } 
    }
}