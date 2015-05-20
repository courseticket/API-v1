var assert = require('assert');
var superagent = require('superagent');
var status = require('http-status');

describe('Setup', function () {

    describe('One test', function() {
        it('should always pass', function() {
            assert.equal(1, 1);
        });

        it('should be able to make get http query with status OK', function(done) {
            var endpoint = 'https://www.courseticket.com';
            superagent.get(endpoint + '/en/users/login').end(function (err, res) {
                assert.ifError(err);
                assert.equal(res.status, status.OK);
                done();
            });
        });
    });

    describe('Environment JWT_KEY', function() {
        var key = process.env.JWT_KEY;

        it('should be type string', function() {
            assert.equal(typeof key, 'string');
        });

        it('should contain 2 dots', function() {
            assert.equal((key.match(new RegExp("[.]", "g")) || []).length, 2);
        });
    });

    describe('Environment ENDPOINT', function() {
        var endpoint = process.env.ENDPOINT;

        it('should be type string', function() {
            assert.equal(typeof endpoint, 'string');
        });

        it('should be an url', function() {
            assert.equal((endpoint.match(new RegExp("^http[s]{0,1}.//[a-z]+.[a-z]+.[a-z]+$", "g"))).length, 1);
        });
    });
});

