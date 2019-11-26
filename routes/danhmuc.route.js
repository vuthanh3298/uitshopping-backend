var express = require('express');
var controller = require('../controllers/danhmuc.controller');
var upload = require('../handlers/multer.handler');

var router = express.Router();

router.get('/create', controller.create);

router.post('/create', upload.single('hinh'), controller.postCreate);

module.exports = router;