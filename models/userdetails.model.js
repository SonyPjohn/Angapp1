
const mongoose = require('mongoose');



var userdetailsSchema = new mongoose.Schema({
     
  user_id:{
       type: mongoose.Schema.ObjectId,
  },

    name :{
        type: String,
       
    },
     mobNo:{
         type: Number,
         
     },
     pincode: {
         type: Number,
     },
     locality: {
        type: String,
    },
    address: {
        type: String,
    },
    district: {
        type: String,
    },
     
});


mongoose.model('Userdetails', userdetailsSchema);