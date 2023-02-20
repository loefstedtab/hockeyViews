//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Players = require("./models/Players");
const Teams = require("./models/Teams")
const Shots = require("./models/Shots")

//ASSOCIATIONS MADE HERE!!!
Teams.hasMany(Players,{
  foreignKey:"teamAbbr",
  targetKey: 'teamAbbr'
})
Players.belongsTo(Teams,{
  foreignKey:'teamAbbr',
  sourceKey: 'teamAbbr'
})

Players.hasMany(Shots, {
  foreignKey: 'shooterName',
  sourceKey: 'shooterName'
})

Shots.belongsTo(Players, {
  foreignKey: 'shooterName',
  targetKey:'shooterName'
})

module.exports = {
  db,
  User,
  Players,
  Teams,
  Shots
};
