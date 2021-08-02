const ProductController = require('../controllers/product.controller')

module.exports = function (app) {
    app.get('/api', ProductController.index);
    app.post('/api/new-product', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.getProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}