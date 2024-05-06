const express = require('express');
const router = express.Router();

const articlesCtrl = require('../controllers/articles.controllers');

router.get('/', articlesCtrl.getAllArticles);
router.get('/:id', articlesCtrl.getOneArticle);
router.post('/', articlesCtrl.createArticle);
router.put('/:id', articlesCtrl.modifyArticle);
router.delete('/:id', articlesCtrl.deleteArticle);

module.exports = router;
