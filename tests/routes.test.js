'use strict';

var app = require('../index.js');
var request = require('supertest');

describe("Routes", function() {
  it("about endpoint sould return 200", function(done) {
    request(app).get('/api/about').expect(200, done)
  });
  it("undefined asset or api routes should return 404", function(done) {
    request(app).get('/api/x').expect(404, done)
  });
  it("other routes should return 400", function(done) {
    request(app).get('/x').expect(400, done)
  });
});