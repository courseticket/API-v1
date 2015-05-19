var assert = require('assert'),
    https = require('https');
describe('Set up', function () {

    describe('One test', function() {
        it('should always pass', function() {
            assert.equal(1, 1);
        });

        it('should be able to makes https query with status 200', function(done) {
            https.get('https://www.courseticket.com/', function (res) {
                assert.equal(200, res.statusCode);
                done();
            });
        });
    });

    describe('Environment JWT_KEY', function() {
        var key = process.env.JWT_KEY;

        it('should be type string', function() {
            assert.equal('string', typeof key);
        });

        it('should contain 2 dots', function() {
            assert.equal(2, (key.match(new RegExp("[.]", "g")) || []).length);
        });
    });
});