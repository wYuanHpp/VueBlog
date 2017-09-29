var Sequelize = require('sequelize');
var BlogService = require('../service/BlogService');
let mr = require('../util/common').makeRespone;
module.exports = async (cxt, next) => {
	console.log("路由:/getallblogs");
	let  data = await BlogService.getAllBlogs();
	cxt.body = data.length>0? mr(0,data): mr(1,data);
	
};