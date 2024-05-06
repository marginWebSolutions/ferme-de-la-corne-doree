const express = require('express');
const router = express.Router();

const CheeseCtrl = require('../controllers/cheeses.controllers');

router.get('/', CheeseCtrl.getAllCheeses);
router.get('/:id', CheeseCtrl.getOneCheese);
router.post('/', CheeseCtrl.createCheese);
router.put('/:id', CheeseCtrl.modifyCheese);
router.delete('/:id', CheeseCtrl.deleteCheese);

module.exports = router;
