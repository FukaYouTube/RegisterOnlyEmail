// import packages
const express           = require('express')
const expressSession    = require('express-session')
const bodyParser        = require('body-parser')

// application express
const app = express()

// use all packages, views public folders and set ejs files
app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }))
app.use(expressSession({ secret: process.env.SECRET, cookie: { maxAge: null }, resave: false, saveUninitialized: false }))

// import router
const { authRouter, userRouter } = require('./router')

// use router
app.use('/', authRouter)
app.use('/u/', userRouter)

module.exports = app