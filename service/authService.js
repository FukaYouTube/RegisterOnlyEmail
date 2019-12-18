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

        res.redirect('/')
    }else{
        let code = Math.floor(10000000000 + Math.random() * 90000000000) // 11
        mailService.sendMailTo(req.body.email, code, user)

        user.code = code
        user.save()

        res.redirect('/')
    }
}

// API
exports.getApi = async (req, res) => {
    const { userId, code } = req.params

    let user = await User.findOne({ id: userId })

    if(code == user.code){
        req.session.userId = user._id
        console.log(req.session)

        user.username ?
        res.redirect(`/u/${user.username}`) : res.redirect(`/u/${user.id}`)
    }else{
        res.status(400).send('error!')
    }
}