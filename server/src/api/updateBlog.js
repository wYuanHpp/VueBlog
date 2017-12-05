var Sequelize = require('sequelize');
var BlogService = require('../service/BlogService');
var mr = require('../util/common').makeRespone;

module.exports = async (cxt, next) => {
	console.log("路由:/updateblog");
	let isSuc = await BlogService.update(cxt.request.body);
	console.log(isSuc);
	cxt.body = isSuc ? mr(0, isSuc) : mr(1, isSuc)
//定义数据模型
//初始化数据
}
