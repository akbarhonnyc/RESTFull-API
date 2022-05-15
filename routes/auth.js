const express = require('express');
const { postLogin, postRegister  } = require('../controllers/auth');
const router = express.Router();

router.post('/register',postRegister);
router.post('/login', postLogin);

module.exports = router;
