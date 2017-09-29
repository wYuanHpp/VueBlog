let BlogService = require('../service/BlogService');
let mr = require('../util/common').makeRespone;
module.exports = async (cxt, next) => {
	console.log("路由:/getoneblog");
	let  data = await BlogService.getOneBlog(cxt.request.body);
	console.log("---",data);
	
	cxt.body = data.length>0? mr(0,data): mr(1,data);
};
