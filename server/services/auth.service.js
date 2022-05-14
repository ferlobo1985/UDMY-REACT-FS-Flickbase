
/// MODELS
const { User } = require('../models/user')
// SERVICES
const userService = require('./user.service');

const createUser = async(email,password) => {
    try{
        if(await User.emailTaken(email)){
            throw new Error('Sorry email taken')
        }

        const user = new User({
            email,
            password
        });
        await user.save();
        return user;
    } catch(error){
        throw error
    }
}


const genAuthToken = (user)=>{
    const token = user.generateAuthToken();
    return token;
}

const signInWithEmailAndPassword = async(email,password) =>{
    try{
        const user = await userService.findUserByEmail(email);
        if(!user){
            throw new Error('Sorry BAD email')
        }
        if(!(await user.comparePassword(password))){
            throw new Error('Sorry BAD password')
        }
        return user;
    } catch(error){
        throw error
    }
}


module.exports = {
    createUser,
    genAuthToken,
    signInWithEmailAndPassword
}