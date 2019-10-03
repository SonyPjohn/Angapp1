const mongoose = require('mongoose');
const Order = mongoose.model('Order');

module.exports.checkout = (req, res, next)=>{
    //console.log(req.body);
        var order = new Order();
    
        car.my_cart.price = req.body.price;
        
        order.save((err,doc) =>{
            if(!err)
            res.send(doc);
    
            else
         return next(err);
        
        });
    
       
    }