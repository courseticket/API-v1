var assert = require("assert");
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){

            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
});
describe('Environment', function (){
    describe('JWT_KEY', function(){
        var key = process.env.JWT_KEY;

        it('should be type string', function(){
            assert.equal('string', typeof key);
        });

        it('should contain 2 dots', function(){
            assert.equal(2, (key.match(new RegExp("[.]", "g")) || []).length);
        })
    })
});