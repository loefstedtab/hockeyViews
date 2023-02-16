const Sequelize = require("sequelize");
const db = require("../db");

const Teams = db.define("team", {
  abbreviation:{
    type: Sequelize.STRING,
    primaryKey: true,
  },
  name:{
    type: Sequelize.STRING
  },
  city:{
    type: Sequelize.STRING
  },
} )

module.exports = Teams
