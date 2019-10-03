
const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({

    user_id:{
         type: mongoose.Schema.ObjectId,
        
     },
     order_id:{
        //  id : "orderid",
        type: Number,
        
     },
     date:{
         type: String
     },
    
     total:{
         type: Number
     } ,
     address_id:{
        type: mongoose.Schema.ObjectId
     }
});

orderSchema.pre('save',function(next){                          // works before save function
    var doc = this;
    Order.findOne({},null, {sort: {date: -1 }}, (error, lastRow) => {  // find the last row of order table
        // if(error)                                                   // date: -1  : descending order
         if(error)
            return next(error);
        if(lastRow){
            doc.order_id = lastRow.order_id +1;
        }else{
            doc.order_id = 1000;
        }
        next();

    });
  
})  

var Order =  mongoose.model('Order', orderSchema);
