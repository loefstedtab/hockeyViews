const router = require('express').Router()

// router.use('/products', require('./products'))
router.use('/players', require('./players'))
router.use('/teams', require('./teams'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
