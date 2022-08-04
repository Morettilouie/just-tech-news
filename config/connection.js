// import Sequelize constructor from the library
const Sequelize = require('sequelize');

// hide user and password from github
require('dotenv').config();

// create connection to our database, pass in your MySQL info for user and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;