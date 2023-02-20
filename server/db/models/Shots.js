const Sequelize = require("sequelize");
const db = require("../db");

const Shots = db.define("shot", {
  shotID: {
    type: Sequelize.INTEGER,
  },
  arenaAdjustedShotDistance: {
    type: Sequelize.STRING,
  },
  arenaAdjustedXCord: {
    type: Sequelize.STRING,
  },
  arenaAdjustedXCordABS: {
    type: Sequelize.STRING,
  },
  arenaAdjustedYCord: {
    type: Sequelize.STRING,
  },
  arenaAdjustedYCordAbs: {
    type: Sequelize.STRING,
  },
  averageRestDifference: {
    type: Sequelize.STRING,
  },
  awayEmptyNet: {
    type: Sequelize.STRING,
  },
  awayPenalty1Length: {
    type: Sequelize.STRING,
  },
  awayPenalty1TimeLeft: {
    type: Sequelize.STRING,
  },
  awaySkatersOnIce: {
    type: Sequelize.STRING,
  },
  awayTeamCode: {
    type: Sequelize.STRING,
  },
  awayTeamGoals: {
    type: Sequelize.STRING,
  },
  defendingTeamAverageTimeOnIce: {
    type: Sequelize.STRING,
  },
  defendingTeamAverageTimeOnIceOfDefencemen: {
    type: Sequelize.STRING,
  },
  defendingTeamAverageTimeOnIceOfDefencemenSinceFaceoff: {
    type: Sequelize.STRING,
  },
  defendingTeamAverageTimeOnIceOfForwards: {
    type: Sequelize.STRING,
  },
  defendingTeamAverageTimeOnIceOfForwardsSinceFaceoff: {
    type: Sequelize.STRING,
  },
  defendingTeamAverageTimeOnIceSinceFaceoff: {
    type: Sequelize.STRING,
  },
  defendingTeamDefencemenOnIce: {
    type: Sequelize.STRING,
  },
  defendingTeamForwardsOnIce: {
    type: Sequelize.STRING,
  },
  defendingTeamMaxTimeOnIce: {
    type: Sequelize.STRING,
  },
  defendingTeamMaxTimeOnIceOfDefencemen: {
    type: Sequelize.STRING,
  },
  defendingTeamMaxTimeOnIceOfDefencemenSinceFaceoff: {
    type: Sequelize.STRING,
  },
  defendingTeamMaxTimeOnIceOfForwards: {
    type: Sequelize.STRING,
  },
  defendingTeamMaxTimeOnIceOfForwardsSinceFaceoff: {
    type: Sequelize.STRING,
  },
  defendingTeamMaxTimeOnIceSinceFaceoff: {
    type: Sequelize.STRING,
  },
  defendingTeamMinTimeOnIce: {
    type: Sequelize.STRING,
  },
  defendingTeamMinTimeOnIceOfDefencemen: {
    type: Sequelize.STRING,
  },
  defendingTeamMinTimeOnIceOfDefencemenSinceFaceoff: {
    type: Sequelize.STRING,
  },
  defendingTeamMinTimeOnIceOfForwards: {
    type: Sequelize.STRING,
  },
  defendingTeamMinTimeOnIceOfForwardsSinceFaceoff: {
    type: Sequelize.STRING,
  },
  defendingTeamMinTimeOnIceSinceFaceoff: {
    type: Sequelize.STRING,
  },
  distanceFromLastEvent: {
    type: Sequelize.STRING,
  },
  event: {
    type: Sequelize.STRING,
  },
  game_id: {
    type: Sequelize.STRING,
  },
  goal: {
    type: Sequelize.STRING,
  },
  goalieIdForShot: {
    type: Sequelize.STRING,
  },
  goalieNameForShot: {
    type: Sequelize.STRING,
  },
  homeEmptyNet: {
    type: Sequelize.STRING,
  },
  homePenalty1Length: {
    type: Sequelize.STRING,
  },
  homePenalty1TimeLeft: {
    type: Sequelize.STRING,
  },
  homeSkatersOnIce: {
    type: Sequelize.STRING,
  },
  homeTeamCode: {
    type: Sequelize.STRING,
  },
  homeTeamGoals: {
    type: Sequelize.STRING,
  },
  homeTeamWon: {
    type: Sequelize.STRING,
  },
  isHomeTeam: {
    type: Sequelize.STRING,
  },
  isPlayoffGame: {
    type: Sequelize.STRING,
  },
  lastEventCategory: {
    type: Sequelize.STRING,
  },
  lastEventShotAngle: {
    type: Sequelize.STRING,
  },
  lastEventShotDistance: {
    type: Sequelize.STRING,
  },
  lastEventTeam: {
    type: Sequelize.STRING,
  },
  lastEventxCord: {
    type: Sequelize.STRING,
  },
  lastEventxCord_adjusted: {
    type: Sequelize.STRING,
  },
  lastEventyCord: {
    type: Sequelize.STRING,
  },
  lastEventyCord_adjusted: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  offWing: {
    type: Sequelize.STRING,
  },
  period: {
    type: Sequelize.STRING,
  },
  playerNumThatDidEvent: {
    type: Sequelize.STRING,
  },
  playerNumThatDidLastEvent: {
    type: Sequelize.STRING,
  },
  playerPositionThatDidEvent: {
    type: Sequelize.STRING,
  },
  season: {
    type: Sequelize.STRING,
  },
  shooterLeftRight: {
    type: Sequelize.STRING,
  },
  shooterName: {
    type: Sequelize.STRING,

  },
  playerId: {
    type: Sequelize.STRING,
  },
  shooterTimeOnIce: {
    type: Sequelize.STRING,
  },
  shooterTimeOnIceSinceFaceoff: {
    type: Sequelize.STRING,
  },
  shootingTeamAverageTimeOnIce: {
    type: Sequelize.STRING,
  },
  shootingTeamAverageTimeOnIceOfDefencemen: {
    type: Sequelize.STRING,
  },
  shootingTeamAverageTimeOnIceOfDefencemenSinceFaceoff: {
    type: Sequelize.STRING,
  },
  shootingTeamAverageTimeOnIceOfForwards: {
    type: Sequelize.STRING,
  },
  shootingTeamAverageTimeOnIceOfForwardsSinceFaceoff: {
    type: Sequelize.STRING,
  },
  shootingTeamAverageTimeOnIceSinceFaceoff: {
    type: Sequelize.STRING,
  },
  shootingTeamDefencemenOnIce: {
    type: Sequelize.STRING,
  },
  shootingTeamForwardsOnIce: {
    type: Sequelize.STRING,
  },
  shootingTeamMaxTimeOnIce: {
    type: Sequelize.STRING,
  },
  shootingTeamMaxTimeOnIceOfDefencemen: {
    type: Sequelize.STRING,
  },
  shootingTeamMaxTimeOnIceOfDefencemenSinceFaceoff: {
    type: Sequelize.STRING,
  },
  shootingTeamMaxTimeOnIceOfForwards: {
    type: Sequelize.STRING,
  },
  shootingTeamMaxTimeOnIceOfForwardsSinceFaceoff: {
    type: Sequelize.STRING,
  },
  shootingTeamMaxTimeOnIceSinceFaceoff: {
    type: Sequelize.STRING,
  },
  shootingTeamMinTimeOnIce: {
    type: Sequelize.STRING,
  },
  shootingTeamMinTimeOnIceOfDefencemen: {
    type: Sequelize.STRING,
  },
  shootingTeamMinTimeOnIceOfDefencemenSinceFaceoff: {
    type: Sequelize.STRING,
  },
  shootingTeamMinTimeOnIceOfForwards: {
    type: Sequelize.STRING,
  },
  shootingTeamMinTimeOnIceOfForwardsSinceFaceoff: {
    type: Sequelize.STRING,
  },
  shootingTeamMinTimeOnIceSinceFaceoff: {
    type: Sequelize.STRING,
  },
  shotAngle: {
    type: Sequelize.STRING,
  },
  shotAngleAdjusted: {
    type: Sequelize.STRING,
  },
  shotAnglePlusRebound: {
    type: Sequelize.STRING,
  },
  shotAnglePlusReboundSpeed: {
    type: Sequelize.STRING,
  },
  shotAngleReboundRoyalRoad: {
    type: Sequelize.STRING,
  },
  shotDistance: {
    type: Sequelize.STRING,
  },
  shotGeneratedRebound: {
    type: Sequelize.STRING,
  },
  shotGoalieFroze: {
    type: Sequelize.STRING,
  },
  shotOnEmptyNet: {
    type: Sequelize.STRING,
  },
  shotPlayContinuedInZone: {
    type: Sequelize.STRING,
  },
  shotPlayContinuedOutsideZone: {
    type: Sequelize.STRING,
  },
  shotPlayStopped: {
    type: Sequelize.STRING,
  },
  shotRebound: {
    type: Sequelize.STRING,
  },
  shotRush: {
    type: Sequelize.STRING,
  },
  shotType: {
    type: Sequelize.STRING,
  },
  shotWasOnGoal: {
    type: Sequelize.STRING,
  },
  speedFromLastEvent: {
    type: Sequelize.STRING,
  },
  team: {
    type: Sequelize.STRING,
  },
  teamCode: {
    type: Sequelize.STRING,
  },
  time: {
    type: Sequelize.STRING,
  },
  timeDifferenceSinceChange: {
    type: Sequelize.STRING,
  },
  timeSinceFaceoff: {
    type: Sequelize.STRING,
  },
  timeSinceLastEvent: {
    type: Sequelize.STRING,
  },
  timeUntilNextEvent: {
    type: Sequelize.STRING,
  },
  xCord: {
    type: Sequelize.STRING,
  },
  xCordAdjusted: {
    type: Sequelize.STRING,
  },
  xFroze: {
    type: Sequelize.STRING,
  },
  xGoal: {
    type: Sequelize.STRING,
  },
  xPlayContinuedInZone: {
    type: Sequelize.STRING,
  },
  xPlayContinuedOutsideZone: {
    type: Sequelize.STRING,
  },
  xPlayStopped: {
    type: Sequelize.STRING,
  },
  xRebound: {
    type: Sequelize.STRING,
  },
  xShotWasOnGoal: {
    type: Sequelize.STRING,
  },
  yCord: {
    type: Sequelize.STRING,
  },
  yCordAdjusted: {
    type: Sequelize.STRING,
  },
});

module.exports = Shots;
