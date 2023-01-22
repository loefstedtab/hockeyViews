//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Players = require("./models/Players")

//ASSOCIATIONS MADE HERE!!!

// User.hasOne(CreditCard);
// CreditCard.belongsTo(User);

// User.hasMany(Order);
// Order.belongsTo(User);

// User.belongsToMany(Products, { through: Cart });
// Products.belongsToMany(User, { through: Cart });

// Order.belongsToMany(Products, { through: "OrderProducts" });
// Products.belongsToMany(Order, { through: "OrderProducts" });

module.exports = {
  db,
  User,
  Players
};
