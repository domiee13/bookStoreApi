var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

var apiProductRoute = require('./api/routes/product.route');
var registerRoute = require('./routes/register.route');
var loginRoute = require('./routes/login.route');

mongoose.connect('mongodb://localhost/bookStore');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/products', apiProductRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);

app.get('/',function(req,res){
    res.send("Hello motherfucker");
});

app.listen(port,function(req,res){
    console.log(`App listening on port ${port}`);
});