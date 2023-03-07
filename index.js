const express = require('express');
const hbs = require('express-handlebars');

const app = express();

const routes = require('./routes');

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(routes);

app.listen(6007);