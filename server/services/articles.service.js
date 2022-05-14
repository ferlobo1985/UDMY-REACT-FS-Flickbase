const { Article } = require('../models/article');
const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError')



const addArticle =  async(body) => {
    try{
        const article = new Article({
            ...body,
            score:parseInt(body.score)
        })
        await article.save();
        return article;
    } catch(error){
        throw error
    }
}



module.exports = {
    addArticle
}