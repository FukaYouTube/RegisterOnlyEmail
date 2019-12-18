const router = require('express').Router()
const authService = require('../service/authService')

router.get('/', (req, res) => authService.Get(req, res))
router.post('/', (req, res) => authService.Post(req, res))

// get api
router.get('/mail/api/:userId&:code', (req, res) => authService.getApi(req, res))

module.exports = router