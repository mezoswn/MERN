  
const ProductController = require('../controllers/product.controller')

module.exports = function (app) {
    app.get('/api', ProductController.index);
    app.post('/api/new-product', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.getProduct);
    app.get('/api/products', ProductController.getAllProducts);
}