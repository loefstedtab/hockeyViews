//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Players = require("./models/Players");
const Teams = require("./models/Teams")

//ASSOCIATIONS MADE HERE!!!
Teams.hasMany(Players,{
  foreignKey:"teamAbbr",
  targetKey: 'teamAbbr'
})
Players.belongsTo(Teams,{
  foreignKey:'teamAbbr',
  sourceKey: 'teamAbbr'
}
  )

module.exports = {
  db,
  User,
  Players,
  Teams
};
