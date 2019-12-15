const rotuer = require('express').Router()
const authService = require('../service/authService')

rotuer.get('/', (req, res) => authService.Get(req, res))
rotuer.post('/', (req, res) => authService.Post(req, res))

module.exports = rotuer