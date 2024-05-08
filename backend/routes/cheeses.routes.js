const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const multer = require('../middleware/multer-config.middleware');

const CheeseCtrl = require('../controllers/cheeses.controllers');

router.get('/', CheeseCtrl.getAllCheeses);
router.get('/:id', auth, CheeseCtrl.getOneCheese);
router.post('/', auth, multer, CheeseCtrl.createCheese);
router.put('/:id', auth, multer, CheeseCtrl.modifyCheese);
router.delete('/:id', auth, CheeseCtrl.deleteCheese);

module.exports = router;
