const router = require("express").Router();
const {
   Teams ,
   Players
} = require("../db");

//router to get all players
router.get('/', async (req, res, next) => {
  try{
    const teams = await Teams.findAll({include: Players})
    // console.log("these are the teams from the router", teams)
    res.json(teams)
  } catch(err) {
    next(err)
  }
})

router.get('/singleTeam', async (req, res, next) => {
  try{
    console.log("THIS IS THE REQ BODY", req.body.dataValues)
    const team = await Teams.findByPk(req.params.abbreviation)
    res.json(team)
  } catch(err){
    next(err)
  }
})

module.exports = router
