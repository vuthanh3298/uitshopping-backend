var DanhMuc = require('../models/danhmuc.model');
var cloudinary = require('cloudinary').v2;

var NhomDanhMuc = require('../models/nhomdanhmuc.model');

module.exports.create = async function(req, res) {
    var nhomdanhmucs = await NhomDanhMuc.find();
    res.render('danhmucs/create', {
        nhomdanhmucs: nhomdanhmucs
    });
}

module.exports.postCreate = async function(req, res) {
    var result = await cloudinary.uploader.upload(req.file.path);
    req.body.hinh = result.url;
    var danhmuc = await DanhMuc.create(req.body);
    res.json(danhmuc);
}