var Sequelize = require('sequelize');
var BlogService = require('../service/BlogService');
let mr = require('../util/common').makeRespone;
module.exports = async (cxt, next) => {
	console.log("路由:/delBlogById")
	let isSuc = await BlogService.delBlogById(cxt.request.body);
	
	cxt.body = isSuc? mr(0,isSuc) : mr(1,isSuc)
	
}