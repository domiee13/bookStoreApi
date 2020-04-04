var express = require('express');

var controller = require('../controllers/login.controller');
var User = require('../models/user.model');

var router = express.Router();

router.post('/', controller.login);

module.exports = router;