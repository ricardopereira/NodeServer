'use strict';

var mongoose = require('mongoose')
var config = require('config')
var debug = require('debug')('app:database')

module.exports = function(app) {
  debug('Config database...')
  // Connect to database
  if (config.has('DB.uri') && config.has('DB.name')) {
    mongoose.connect(config.get('DB.uri')+config.get('DB.name'));
  }
  else if (config.has('DB.uri')) {
    mongoose.connect(config.get('DB.uri'));
  }
  else {
    // Default: use MONGO_LAB
    mongoose.connect(process.env.MONGOLAB_URI);
  }

  // Populate DB with sample data
  if (config.has('DB.sampleData') && config.get('DB.sampleData'))
    require('./sample')(mongoose);
}