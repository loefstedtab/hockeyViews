const router = require("express").Router();
const {
   Teams ,
   Players
} = require("../db");

//router to get all players
router.get('/', async (req, res, next) => {
  try{
    const teams = await Teams.findAll({include: Players})
    res.json(teams)
  } catch(err) {
    next(err)
  }
})

router.get('/singleTeam', async (req, res, next) => {
  try{
    const team = await Teams.findByPk(req.params.abbreviation)
    res.json(team)
  } catch(err){
    next(err)
  }
})

module.exports = router
