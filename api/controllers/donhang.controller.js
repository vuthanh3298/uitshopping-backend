var Donhang = require('../../models/donhang.model');


module.exports.index = async function(req,res){
	var donhangs = await Donhang.find();
	res.json(donhangs);
};


module.exports.view = async function(req,res){

	var id =mongoose.Types.ObjectId(req.query.id);
	var donhangs = await Donhang.find({ id:id }).then(function(donhangs){
			return donhangs;
		});
}

module.exports.create = async function(req,res){
	var donhang= new Donhang({
	user_id:req.query.user_id,
	sanpham_id:req.query.sanpham_id,
	soluong:req.query.soluong,
	daxuat:"false",
	danhan:"false"
	})
	var Donhang = await Donhang.create(donhang);
	res.json(Donhang);
}

