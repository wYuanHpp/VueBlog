var dataBase = require('../db/database');
var Sequelize = require('sequelize');

const Blog = dataBase.define('Blog', { title: Sequelize.STRING,
	content:Sequelize.TEXT,
	description:Sequelize.STRING
});
const Tag = dataBase.define('Tag' , {
	tag:Sequelize.STRING
})
Blog.hasMany(Tag);
Tag.belongsTo(Blog);

module.exports.create = async function(blog,tags){
	await dataBase.sync();
	let isSuc = false;
	try{
		let _blog = await Blog.create(blog);
		await tags.forEach(async el=>{
			await _blog.createTag({tag:el});
		});
		isSuc = true;
	}catch(err){
		console.log(err);
	}
	return isSuc;
};

module.exports.getAll = async function() {
	var blogs = await Blog.findAll({
		'include': [Tag]
	});
	return blogs;
};

module.exports.getAllAbstract = async function() {
	var blogs = await Blog.findAll({
		include:[Tag],
		attributes:['title', 'description', 'id', 'createdAt', 'updatedAt']
	});
	return blogs;
};

module.exports.getOne = async function(id) {
	let blog = await Blog.findAll({
		include:[Tag],
		where:{
			id:id
		}
	});
	return blog;
};

module.exports.delById = async function(id) {
	var isSuc = false;
	//通过id查找数据
	let blog = await Blog.findAll({
		include:[Tag],
		where: {
			'id': id
		}
	});
	//判断是否有数据
	blog.length >= 0 && (isSuc = true);
	blog = blog[0];
	blog.Tags.forEach(async tag => await tag.destroy())
	await blog.destroy();
	return isSuc;
};


