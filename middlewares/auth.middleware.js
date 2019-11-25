// var db = require('../db');
var User = require('../models/user.model');
module.exports.requireAuth = function(req,res,next){
	console.log(req.cookies, req.signedCookies);
	if(!req.signedCookies.userId){
		res.redirect('auth/login');
		return;
	}

	var user =User.find({id:req.signedCookies.userId}).then(function(users){
		return users[0];
		})
	if(!user){
		res.redirect('auth/login');
		return;
	}
	res.locals.user =user;
	next();
	
}