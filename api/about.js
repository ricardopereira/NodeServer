'use strict';

var express = require('express');
var controller = require('../controller');

var router = express.Router();

router.get('/', controller.about);

module.exports = router;