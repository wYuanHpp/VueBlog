const BlogDao = require('../dao/BlogDao');

function handleData(blogs) {
	let respone = [];
	blogs.forEach(blog => {
		console.log(blog);
		let obj = {};
		blog.content &&	(obj.content = blog.content);
		blog.title && (obj.title = blog.title);
		blog.id && (obj.id = blog.id);
		blog.description && (obj.description = blog.description);
		obj.createdAt = blog.createdAt.getTime();
		obj.updatedAt = blog.updatedAt.getTime();
		obj.tags = [];
		blog.Tags.forEach(tag => {
			obj.tags.push(tag.tag);
		});
		respone.push(obj);
	});
	return  respone;
}

module.exports = {
	async getAllBlogs(){
		let blogs = await BlogDao.getAll();
		return handleData(blogs);
	},
	
	async getAllBlogsAbstract() {
		let blogs =await BlogDao.getAllAbstract();
		return handleData(blogs);
	},
	
	async getOneBlog(param) {
		console.log("query:",param)
		let blog = await BlogDao.getOne(param.id);
		return handleData(blog);
	},
	async createBlog(param) {
		console.log("query:",param)
		let isSuc = await BlogDao.create({
			content: param.content,
			title: param.title,
			description: param.description,
		},param.tags);
		return isSuc;
	},
	
	async delBlogById(param) {
		console.log("query:",param)
		let id = param.id;
		return isSuc = await BlogDao.delById(id);
	}
	
	
	
}