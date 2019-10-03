
const mongoose = require('mongoose');

var ordSchema = new mongoose.Schema({

    user_id:{
         type: mongoose.Schema.ObjectId,
        
     },
   
     date:{
         type: String
     },
    
     total:{
         type: Number
     } 
    


});

mongoose.model('Ord', ordSchema);
