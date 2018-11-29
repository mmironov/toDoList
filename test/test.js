var request = require('supertest');
var app = require('../server');

describe('GET /tasks', function() {
    it('respond with json containing all tasks', function(done) {
        request(app)
        .get('/tasks')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    })
});
