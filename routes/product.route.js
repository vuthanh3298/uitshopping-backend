var express = require('express');
var controller = require('../controllers/product.controller');
var validate = require('../validate/product.validate');
var router = express.Router();

router.get('/',controller.index);
router.get('/create',controller.create);
router.post('/create',
	validate.postCreate,
	controller.postCreate
);
router.get('/view/:id',controller.view);
router.get('/delete/:id',controller.delete);
module.exports = router;