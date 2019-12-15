const mailService = require('./mailService')

const { User } = require('../models')

exports.Get = (req, res) => {
    res.render('email')
}

exports.Post = async (req, res) => {
    let user = await User.findOne({ email: req.body.email })

    if(!user){
        mailService
    }else{

    }
}