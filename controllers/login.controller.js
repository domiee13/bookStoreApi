var User = require('../models/user.model');

var bcrypt = require('bcrypt');

module.exports.login = function(req, res){
    User.findOne({
        email:req.body.email
    })
    .then(user=>{
        if(user){
            var result = bcrypt.compareSync(req.body.password, user.password);
            // if(result){
            if(bcrypt.compareSync(req.body.password, user.password)){
                console.log("Login success");   
                res.json({status: "Login success, welcome <3"});
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