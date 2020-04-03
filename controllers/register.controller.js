var User = require('../models/user.model');

module.exports.postRegister = function(req,res){
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    console.log(req.body);

    User.findOne({
        email: req.body.email
    })
    .then(user=>{
        if(!user){
            User.create(newUser).then(user=>{
                res.json({status: user.email + " registed!"});
            })
            .catch(err=>{
                res.send('error: ' + err);
            })
        }
        else{
            res.json({error: 'User already exist.'})
        }
    })
    .catch(err=>{
        res.send('error: ' + err);
    })
}