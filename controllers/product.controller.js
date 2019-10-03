const mongoose = require('mongoose');
const Product = mongoose.model('Product')

module.exports.getAllProduct = function(callback){
    Product.find({},callback);
}





