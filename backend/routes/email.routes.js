const express = require('express');

const router = express.Router();

const emailCtrl = require('../controllers/email.controllers');

router.post('/', emailCtrl.forwardEmail);

module.exports = router;
