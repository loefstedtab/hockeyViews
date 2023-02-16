const Sequelize = require("sequelize");
const db = require("../db");

const Players = db.define("player", {
  img:{
    type:Sequelize.STRING,
    defaultValue: 'logo.png'
  },
  season: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  teamAbbr: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  situation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  games_played: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  icetime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  shifts: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gameScore: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  onIce_xGoalsPercentage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  offIce_xGoalsPercentage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  onIce_corsiPercentage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  offIce_corsiPercentage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  onIce_fenwickPercentage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  offIce_fenwickPercentage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  I_F_xGoals: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  I_F_points: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  I_F_goals: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  penalties: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  I_F_penaltyMinutes: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  I_F_hits: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  I_F_takeaways: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  I_F_giveaways: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  faceoffsWon: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  faceoffsLost: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  penaltyMinutes: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Players;
