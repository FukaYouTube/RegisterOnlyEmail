const nodemailer = require('nodemailer')
const fs = require('fs')

let mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.E_LOGIN,
        pass: process.env.E_PASS
    }
})

let msg = JSON.parse(fs.readFileSync('source/message/inputAccount.json'))

exports.sendMailTo = (email, code, user) => {
    let urlCode = `https://localhost:4349/mail/api/${user.id}&${code}`
    
    mail.sendMail({
        from: process.env.E_LOGIN,
        to: email,
        subject: msg['message1'].subjects,
        text: msg['message1'].text + ` ${urlCode}`
    })
}

exports.sendMailToNewUser = (email, code, user) => {
    let urlCode = `https://localhost:4349/mail/api/${user.id}&${code}`

    mail.sendMail({
        from: process.env.E_LOGIN,
        to: email,
        subject: msg['message2'].subjects,
        text: msg['message2'].text + ` ${urlCode}`
    })
}