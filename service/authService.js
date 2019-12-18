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

// API
exports.getApi = async (req, res) => {
    const { userId, code } = req.params

    if(code == user.code){
        let user = await User.findOne({ id: userId })

        user.username ?
        res.redirect(`/u/${user.username}`) : res.redirect(`/u/${user.id}`)
    }else{
        res.status(400).send('error!')
    }
}