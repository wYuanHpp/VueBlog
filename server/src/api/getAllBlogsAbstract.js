var Sequelize = require('sequelize');
var BlogService = require('../service/BlogService');
let mr = require('../util/common').makeRespone;
module.exports = async (cxt, next) => {
	console.log("路由:/getallblogsabstract");
	let  data = await BlogService.getAllBlogsAbstract();
	cxt.body = data.length>0? mr(0,data): mr(1,data);
	
};