
const mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
     
    // id:{
    //     type: String,
    // },

    prod_id :{
        type: mongoose.Schema.ObjectId,
       
       
    },
    user_id:{
         type: mongoose.Schema.ObjectId,
        
     },
     quantity: {
         type: Number,
    
     }
});

mongoose.model('Cart', cartSchema);
module.exports.addToCart = function(cart,callback){
    console.log(cart);
   // var Product =  Product(product);
    Product.save(callback);
}
