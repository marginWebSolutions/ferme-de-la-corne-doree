const express = require('express');
const auth = require('../middleware/auth.middleware');
const router = express.Router();

const articlesCtrl = require('../controllers/articles.controllers');

router.get('/', articlesCtrl.getAllArticles);
router.get('/:id', auth, articlesCtrl.getOneArticle);
router.post('/', auth, articlesCtrl.createArticle);
router.put('/:id', auth, articlesCtrl.modifyArticle);
router.delete('/:id', auth, articlesCtrl.deleteArticle);

module.exports = router;
