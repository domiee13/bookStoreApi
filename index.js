require('dotenv').config();

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var User = require('./models/user.model');

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
    console.log(req.headers);
    var decode = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    User.findOne({
        _id: decode._id
    })
    .then(user=>{
        if(user){
            res.json(user);
        }
        else{
            res.redirect('/login');
        }
    })
    .catch(err=>{
        res.send("Error: "+ err);
    })
});

app.listen(port,function(req,res){
    console.log(`App listening on port ${port}`);
});