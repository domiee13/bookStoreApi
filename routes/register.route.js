var express = require('express');

var router = express.Router();

var controller = require('../controllers/register.controller');
var User = require('../models/user.model');

router.post('/', controller.postRegister);

module.exports = router;


module.exports = router;