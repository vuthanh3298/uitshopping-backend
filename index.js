require('dotenv').config();

console.log(process.env.SESSION_SECRET);
var express = require('express');
// var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);


var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
// Set some defaults (required if your JSON file is empty)

var apiProductRoute = require('./api/routes/product.route');

var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');

var port= process.env.PORT || 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views','./views');
// app.use(bodyParser.json())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(sessionMiddleware);

app.use(express.static('public'));

app.get('/',authMiddleware.requireAuth, function(req,res){
	res.render('index',{
		name:'Tiki'
	});
});

app.use('/users',authMiddleware.requireAuth,userRoute);
app.use('/auth',authRoute);
app.use('/products',authMiddleware.requireAuth,productRoute);
app.use('/cart',authMiddleware.requireAuth,cartRoute);

app.use('/api/products',apiProductRoute);
app.listen(port, function(){
	console.log('Example app listening on port'+ port);
});