const path = require('path');
const { Router } = require('express');
const rootDir = require('../utils/path');

const routes = Router();

const products = [];

routes.get('/add-product', (request, response, next) => {
    response.render('add-product', { docTitle: 'Add Product', path: '/admin/add-product' });
});

routes.post('/product', (request, response, next) => {
    const { title } = request.body;

    if (title === '') {
        return response.send('<script>alert("Put some product please!");window.location="/admin/add-product";</script>');
    }

    products.push({title});
    console.log(products);  
    response.redirect('/');
});

module.exports = {
    routes,
    products,
}