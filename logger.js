'use strict';

var config = require('config')
var debug = require('debug')('app:logger')
var winston = require('winston')
var Mail = require('winston-mail').Mail

module.exports = function(app) {
  debug('Config logger...')
  app.set('logger', winston)

  // Command line
  winston.cli()
  // Exceptions
  if (config.has('ErrorHandler.log')) {
    debug('ErrorHandler.log: %s', config.get('ErrorHandler.log'))
    winston.handleExceptions(new winston.transports.File({ filename: config.get('ErrorHandler.log'), 
      prettyPrint: true, maxsize: 2024000, maxFiles: 20, json: false }))
  }
  // Handlers default
  var mailConfig = { to: process.env.ERROR_HANDLER_destination,
    host: 'smtp.gmail.com',
    port: '465',
    subject: 'ExamologyServer: {{level}} - {{msg}}',
    username: process.env.ERROR_HANDLER_username,
    password: process.env.ERROR_HANDLER_password,
    ssl: true,
    tls: false,
    level: 'error'
  }
  // Handlers config
  if (config.has('ErrorHandler.username')) {
    debug('ErrorHandler.username: %s', config.get('ErrorHandler.username'))
    mailConfig = { to: config.get('ErrorHandler.destination'),
        username: config.get('ErrorHandler.username'),
        password: config.get('ErrorHandler.password')
      }
  }
  // Mail
  winston.add(Mail, mailConfig)
}
