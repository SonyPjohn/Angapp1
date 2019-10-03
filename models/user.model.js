
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


var userSchema = new mongoose.Schema({
     
  

    username :{
        type: String,
        required:'username cant be empty'
    
    },
     password:{
         type: String,
         required:'password cant be empty',
         minlength : [4, 'password must be atleast 4 characters long']
         
         
     },
     email: {
         type: String,
         required:'email cant be empty'
     },
     saltSecret: String
});


userSchema.pre('save',function(next){
    bcrypt.genSalt(10, (err,salt) =>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password = hash;
            this.saltSecret = salt;
            next();
        })
    })
})


mongoose.model('User', userSchema);


