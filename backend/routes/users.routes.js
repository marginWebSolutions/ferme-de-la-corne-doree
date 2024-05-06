const express = require('express');
const auth = require('../middleware/auth.middleware');
const router = express.Router();

const usersCtrl = require('../controllers/users.controllers');

router.post('/signup', auth, usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;
