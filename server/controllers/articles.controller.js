const httpStatus = require('http-status');
const { articlesService } = require('../services')



const articlesController = {
    async createArticle(req,res,next){
        try{
            const article = await articlesService.addArticle(req.body);
            res.json(article);
        } catch(error){
            next(error)
        }
    }

}

module.exports = articlesController;