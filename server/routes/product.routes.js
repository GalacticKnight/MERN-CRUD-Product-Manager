const ProductController = require('../controllers/product.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findOneSingleProduct);
    app.put('/api/product/:id', ProductController.updateExistingProduct);
    app.post('/api/product/', ProductController.createNewProduct);
    app.delete('/api/product/:id', ProductController.deleteAnExistingProduct);
}