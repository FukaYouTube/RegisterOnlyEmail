const { Schema } = require('mongoose')

let user = new Schema({
    // required
    email:  { type: String, required: true },
    code:   { type: String, required: true },

    // user
    username:   String,
    first_name: String,

    // default
    id:     { type: String, default: Math.random().toString(36).substr(2, 9) },
    date:   { type: Date, default: Date.now }
})

module.exports = user