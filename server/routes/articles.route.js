const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles.controller');

const auth = require('../middleware/auth');



router.post('/',auth('createAny','articles'), articlesController.createArticle)


module.exports = router;