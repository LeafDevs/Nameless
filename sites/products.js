const fs = require("fs");

module.exports = {
    name: '/shop/products/:name',
    type: 1,
    callback(req, res) {
        const product = req.params.name;

        const data = fs.readFileSync('products.json', 'utf-8')
        let items = JSON.parse(data);

        let frontView = items[product].front;
        let backView = items[product].back;

        let price = items[product].price;

        // captialize the start of each word in the product name and remove all underscores and replace them with spaces
        let name = product.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        res.render('product', { name: name, front: frontView, back: backView, price: price, productname: product });
    }
}