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

async function create(blog,tags){
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

async function getAll() {
	var blogs = await Blog.findAll({
		'include': [Tag]
	});
	return blogs;
};

async function getAllAbstract() {
	var blogs = await Blog.findAll({
		include:[Tag],
		attributes:['title', 'description', 'id', 'createdAt', 'updatedAt']
	});
	return blogs;
};

async function getOne(id) {
	let blog = await Blog.findAll({
		include:[Tag],
		where:{
			id:id
		}
	});
	return blog;
};

async function delById(id) {
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

async function update(obj) {
	var isSuc = false;
	var _blog = (await getOne(obj.id))[0];
	var tem = {};
	var id = obj.id;
	var tags = obj.tags.slice();
	console.log(_blog)
	delete obj.id;
	delete obj.tags;
	try{
		await Blog.update(obj,{
			where:{id:id}
		});
		_blog.Tags.forEach(async tag => await tag.destroy());
		console.log(tags)
		await tags.forEach(async el=>{
			await _blog.createTag({tag:el});
		});
		isSuc = true;
	}catch(err){
	
	}
	return isSuc;
}

module.exports.create = create;
module.exports.getAll = getAll;
module.exports.getAllAbstract = getAllAbstract;
module.exports.getOne = getOne;
module.exports.delById = delById;
module.exports.update = update;
