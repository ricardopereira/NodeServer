'use strict';

var debug = require('debug')('app:controller')

exports.about = function(req, res) {
  res.status(200).send('OK')
};