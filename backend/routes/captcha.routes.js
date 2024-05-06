const express = require('express');

const router = express.Router();

const capchaCtrl = require('../controllers/captcha.controllers');

router.post('/', capchaCtrl.validateCaptchaResponse);

module.exports = router;
