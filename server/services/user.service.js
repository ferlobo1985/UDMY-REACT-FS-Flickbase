/// MODELS
const { User } = require('../models/user');
const { ApiError } = require('../middleware/apiError')
const httpStatus = require('http-status');

const findUserByEmail = async(email) => {
    return await User.findOne({email});
}

const findUserById = async(_id) => {
    return await User.findById(_id)
}

const updateUserProfile = async(req) => {
    try{
        const user = await User.findOneAndUpdate(
            { _id:req.user._id},
            {
                "$set":{
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    age: req.body.age
                }
            },
            { new: true }
        )
        if(!user){
            throw new ApiError(httpStatus.NOT_FOUND,'User not found')
        }
        return user;
    } catch(error){
        throw error
    }
}


module.exports = {
    findUserByEmail,
    findUserById,
    updateUserProfile
}