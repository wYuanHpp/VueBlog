//引入框架
var Sequelize = require('sequelize');
// var User = require('./User');
//初始化链接（支持连接池）
module.exports = new Sequelize('BLOG', 'root', '851127wang',  {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
});
//定义数据模型
// User.init();
// console.log()
//初始化数据
// sequelize.sync().then(function() {
// 	return User.create({
// 		username: 'janedoe',
// 		birthday: new Date(1980, 6, 20),
// 		password:123321
// 	});
// }).then(function(jane) {
// 	//获取数据
// 	console.log(jane.get({
// 		plain: true
// 	}));
// }).catch(function (err) {
// 	//异常捕获
// 	console.log('Unable to connect to the database:', err);
// });

