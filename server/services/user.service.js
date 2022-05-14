/// MODELS
const { User } = require('../models/user');
const { ApiError } = require('../middleware/apiError')
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken')
require('dotenv').config();

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


const updateUserEmail = async(req) => {
    try{
        if(await User.emailTaken(req.body.newemail)){
            throw new ApiError(httpStatus.NOT_FOUND,'Sorry email taken')
        }        
        const user = await User.findOneAndUpdate(
            { _id:req.user._id, email: req.user.email },
            {
                "$set":{
                    email: req.body.newemail,
                    verified:false
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

const validateToken = (token) => {
    return jwt.verify(token,process.env.DB_SECRET)
}


module.exports = {
    findUserByEmail,
    findUserById,
    updateUserProfile,
    updateUserEmail,
    validateToken
}