const { authService } = require('../services');

const authController = {
    async test(req,res,next){
        res.json({ok:'yes'})
    }
}

module.exports = authController;