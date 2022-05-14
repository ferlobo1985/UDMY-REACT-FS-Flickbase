/// MODELS
const { User } = require('../models/user')


const findUserByEmail = async(email) => {
    return await User.findOne({email});
}


module.exports = {
    findUserByEmail
}