var express = require('express');
var mongoose = require('mongoose');

var app = express();

var port = 5000;

var apiProductRoute = require('./api/routes/product.route');

mongoose.connect('mongodb://localhost/bookStore');

app.use('/api/products', apiProductRoute);

app.get('/',function(req,res){
    res.send("Hello motherfucker");
});

app.listen(port,function(req,res){
    console.log(`App listening on port ${port}`);
});