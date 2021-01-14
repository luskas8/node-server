const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { routes: adminRoutes } = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Setup the engine templates
app.set('view engine', 'pug');
app.set('views', 'src/views');

// Parser de conteudo
app.use(bodyParser.urlencoded({extended: false}));

// Middleware for statics pages
app.use(express.static(path.join(__dirname, '..', 'public')));

/* Routes */
app.use('/admin', adminRoutes);
app.use(shopRoutes);

/* Router not found */
app.use((request, response, next) => {
    response.status(404).render('404', {docTitle: 'Page Not Found'})
})

app.listen(3333, 'localhost', () => {
    console.log('Server online on http://localhost:3333');
});