'use strict';

var express = require('express')
var morgan = require('morgan')
var debug = require('debug')('app:main')
var app = express()

// Config and connect to database
require('./database')(app)

// Setup server
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

// Logger
require('./logger')(app)
// HTTP Request logger
app.use(morgan('dev'))

// Config endpoints
require('./routes')(app)

// Start server
app.listen(app.get('port'), function() {
  debug('Listen...')
  app.get('logger').info('Express server listening on %d, in %s mode', app.get('port'), app.get('env'))
})

// Expose app
exports = module.exports = app