const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');

module.exports.getCartProduct = function(callback){
    Product.find({},callback);
}
