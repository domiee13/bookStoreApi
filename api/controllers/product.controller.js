var Product = require('../../models/book.model');

module.exports.index = async function(req,res){
    var products = await Product.find();
    res.json(products);
}