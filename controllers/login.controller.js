var User = require('../models/user.model');

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports.login = function(req, res){
    User.findOne({
        email:req.body.email
    })
    .then(user=>{
        if(user){
            var result = bcrypt.compareSync(req.body.password, user.password);
            // if(result){
            if(bcrypt.compareSync(req.body.password, user.password)){   
                const payload ={
                    _id: user.id,
                    name: user.name,
                    email: user.email
                }  
                let token = jwt.sign(payload, process.env.SECRET_KEY,{
                    expiresIn: 1440
                });
                // res.json({status: "Login success, welcome <3"});
                res.send(token);
            }
            else{
                res.json("Please check your password");
            }
        }
        else{
            res.json("User does not exist");
        }
    })
    .catch(err=>{
        res.send("Error: " + err);
    })
}