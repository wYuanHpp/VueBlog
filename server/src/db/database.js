var Sequelize = require('sequelize');
let config = require('../config/database.config');

module.exports = new Sequelize(config.databaseName, config.username, config.password,  {
	host: config.hostname,
	dialect: config.dialect,
	dialectOptions:config.dialectOptions,
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	define:config.define
});
