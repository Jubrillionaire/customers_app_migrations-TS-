import { Sequelize } from 'sequelize';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const url:any = process.env[config.use_env_variable]

const  sequelize = config.use_env_variable ? new Sequelize(url, config)  : new Sequelize(config.database, config.username, config.password, config) 


export { Sequelize, sequelize };