const router = require('express').Router()
const controllers = require('../controllers')
const { auth } = require('../utils')

router.get('/:accountType', controllers.smurf.get.all)

router.get('/smurf/:id', controllers.smurf.get.one)

router.post('/', auth.permitAdminUser, controllers.smurf.post)

router.delete('/:id', auth.permitAdminUser, controllers.smurf.delete)

module.exports = router