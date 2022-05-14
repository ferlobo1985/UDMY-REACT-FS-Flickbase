const { check, validationResult } = require('express-validator');
const httpStatus = require('http-status');


const addArticleValidator = [
    check('title')
        .trim().not().isEmpty().withMessage('You need to add a title').bail()
        .isLength({min:3}).withMessage('Minimum 3 required').bail(),
    check('director')
        .trim().not().isEmpty().withMessage('You need to add a director').bail()
        .not().isBoolean().withMessage('You cannot add a bool here').bail()
        .isLength({min:3,max:100}).withMessage('Too long').bail(),
    (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(httpStatus.BAD_REQUEST).json({
                errors: errors.array()
            })
        }
        next()
    }
]


module.exports = {
    addArticleValidator
}