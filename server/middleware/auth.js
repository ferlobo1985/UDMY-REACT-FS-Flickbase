const passport = require('passport');
const { ApiError } = require('./apiError');
const httpStatus = require('http-status');


const verify = (req,res,resolve,reject) => async(err,user) => {
    if(err || !user){
        return reject(new ApiError(httpStatus.UNAUTHORIZED,'Sorry, unauthorized'))
    }
    req.user = {
        _id: user._id,
        email:user.email,
        role: user.role,
        firstname:user.firstname,
        lastname:user.lastname,
        age:user.age,
        verified: user.verified
    }


    resolve()
}



const auth = () => async(req,res,next)=>{
    return new Promise((resolve,reject)=>{
        passport.authenticate('jwt',{ session: false}, verify(req,res,resolve,reject))(req,res,next)
    })
    .then(()=> next())
    .catch((err)=> next(err))
}



module.exports = auth;