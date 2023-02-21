const router = require("express").Router();
const {
   Players, Shots ,
} = require("../db");


//router to get all players
router.get('/', async (req, res, next) => {
  try{
    const players = await Players.findAll()
    res.json(players)
  } catch(err) {
    next(err)
  }
})

//router to get a single player
router.get('/:id', async (req, res, next) => {
  try{
    const player = await Players.findByPk(req.params.id, {include: Shots})
    res.json(player)
  } catch(err) {
    next(err)
  }
})


module.exports = router
