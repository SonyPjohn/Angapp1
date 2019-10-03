const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({

    prod_id:{
        type: String
    },

    name :{
        type: String
    },
    category:{
         type: String
     },
     quantity: {
         type: Number
     },

     price: {
        type: Number
    },
    photo:{
        type: String
    },

});

mongoose.model('Product', productSchema);

