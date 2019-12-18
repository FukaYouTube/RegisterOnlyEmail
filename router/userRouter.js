const router = require('express').Router()
const userService = require('../service/userService')

router.get('/:user', (req, res) => userService.getUser(req, res))

module.exports = router