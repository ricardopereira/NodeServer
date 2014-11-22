'use strict';

var debug = require('debug')('app:routes')

module.exports = function(app) {
  debug('Config routes...')
  // Welcome
  app.route('/')
    .get(function(req, res) {
      res.send('NodeServer')
    });

  // API endpoints
  app.use('/api/about', require('./api/about'));

  // All undefined asset or api routes should return 404
  app.route('/:url(api|asset)/*')
    .get(function(req, res) {
      res.status(404).send('Not found')
    });

  // All other routes should return 400
  app.route('/*')
    .get(function(req, res) {
      res.status(400).send('Bad request')
    });
}