var express = require('express');
var controller = require('../controllers/donhang.controller');

var router = express.Router();

router.get('/',controller.index);
router.post('/create',controller.create);
router.post('/view',controller.view);

module.exports = router;