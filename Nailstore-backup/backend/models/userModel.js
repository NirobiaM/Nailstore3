const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

const userModel = model("user", userSchema)

module.exports = userModel