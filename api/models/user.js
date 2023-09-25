const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function (next) {

    if(!this.isModified('password'))
        return next();

    this.password = await bcrypt.hash(this.password, 12)

    next();
})

userSchema.statics.findUser = async function (email, password) {

    const user = await this.findOne({ email })

    const isMatch = await bcrypt.compare(password, user.password)

    return isMatch ? user : false
}

const User = mongoose.model('User', userSchema)

module.exports = User