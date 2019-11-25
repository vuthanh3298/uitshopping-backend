var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	ten:String,
	mota: String,
	gia:String,
	giacu:String,
	tilegiamgia:String,
	madanhmuc:String,
	anh:String
});

var Product = mongoose.model('Product',productSchema,'products');

module.exports = Product;