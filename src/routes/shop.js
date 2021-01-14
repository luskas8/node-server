const path = require('path');
const { Router } = require('express');
const rootDir = require('../utils/path');

const { products } = require('../routes/admin');

const routes = Router();

routes.get('/', (request, response, next) => {
    response.render('shop', { prods: products, docTitle: 'Shop', path: '/' });
});

module.exports = routes;