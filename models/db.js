const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, (err) =>{

    if(!err) { 
        console.log('Mongodb connection suceeded')}

    else {
        console.log('Error in mongodb connection: ' + JSON.stringify( err, undefined,2))
    }

});

require('./cart.model');
require('./user.model');
require('./product.model');
require('./order.model');
require('./orderdetails.model');
require('./ord.model');
require('./userdetails.model');

