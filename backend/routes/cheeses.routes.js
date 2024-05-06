const express = require('express');
const auth = require('../middleware/auth.middleware');
const router = express.Router();

const CheeseCtrl = require('../controllers/cheeses.controllers');

router.get('/', CheeseCtrl.getAllCheeses);
router.get('/:id', auth, CheeseCtrl.getOneCheese);
router.post('/', auth, CheeseCtrl.createCheese);
router.put('/:id', auth, CheeseCtrl.modifyCheese);
router.delete('/:id', auth, CheeseCtrl.deleteCheese);

module.exports = router;
