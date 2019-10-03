
const mongoose = require('mongoose');

var orderdetailsSchema = new mongoose.Schema({

    order_id:{
         type: mongoose.Schema.ObjectId,
        
     },
    user_id:{
         type: mongoose.Schema.ObjectId,
        
     },
     prod_id:{
         type: String
     },
    
     quantity:{
         type: Number
     },

     price: {
        type: Number
     },

     total:{
        type: Number 
     },
     photo:{
        type: String  
     },
     name:{
        type: String  
     },
});

mongoose.model('Orderdetails', orderdetailsSchema);
