var Product = require('../models/product.model');
var mongoose = require('mongoose');
module.exports.index = function(req,res){
	// var page = parseInt(req.query.page) || 1;
	// var perPage = 8;

	// var start = (page - 1) * perPage;
	// var end = page *perPage;
	// res.render('product/index',{
	// 	products: db.get('products').value().slice(start,end)
	// });
	Product.find().then(function(products){
		res.render('product/index',{
			products: products
		});
	});
};

module.exports.create = function(req,res){
	console.log(req.cookies);
	res.render('product/create');
};

module.exports.postCreate =  async function(req,res){
	var product =  await Product.create(req.body);
	res.json(product);
	// res.redirect('/products'); 
};
module.exports.view = async function(req,res){

	var id =mongoose.Types.ObjectId(req.params.id);

	var product = await Product.findById(id,function(err,product){
		return product;
	});

	res.render('product/view', {
		product: product
	});
}

module.exports.delete = async function(req,res){
	var id =mongoose.Types.ObjectId(req.params.id);
	Product.findByIdAndRemove(id, function(err,product){
		if(err) return err;
	});
	res.redirect('/products');
}