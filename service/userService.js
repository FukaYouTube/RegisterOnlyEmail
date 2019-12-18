const { User } = require('../models')

exports.getUser = async (req, res) => {
    let user = await User.findOne({ $or: [{ id: req.params.user }, { username: req.params.user }] })
    
    if(user){
        req.session.userId == user._id ?
        res.send(user) : res.status(200).send('ok')
    }else{
        res.status(404).send()
    }
}