const mailService = require('./mailService')

const { User } = require('../models')

exports.Get = (req, res) => {
    res.render('email')
}

exports.Post = async (req, res) => {
    let user = await User.findOne({ email: req.body.email })

    if(!user){
        let code = Math.floor(10000000000 + Math.random() * 90000000000) // 11

        user = new User({ email: req.body.email, code })
        user.save()

        mailService.sendMailToNewUser(req.body.email, code, user)
    }else{
        let code = Math.floor(10000000000 + Math.random() * 90000000000) // 11
        mailService.sendMailTo(req.body.email, code, user)
    }
}