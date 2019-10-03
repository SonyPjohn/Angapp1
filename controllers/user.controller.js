const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.register = (req, res, next)=>{
//console.log(req.body);
    var user = new User();

    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.save((err,doc) =>{
        if(!err)
        res.send(doc);

        else
        
     return next(err);
    
    });

   
}




