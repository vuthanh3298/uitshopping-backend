var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	user_id:String,
	sanpham_id:String,
	soluong:String,
	daxuat:String,
	danhan:String
});

var donhang = mongoose.model('Donhang',productSchema,'donhangs');

module.exports = donhang;