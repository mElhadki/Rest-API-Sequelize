const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");


const sequelizeConn = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelizeConn;
db.books = require("./books.model.js")(sequelizeConn, Sequelize);

module.exports = db;
