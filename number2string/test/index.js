let numberToString = require('../src/index');
let assert = require('assert');

describe('A function that transforms a number into a string.', function(){
    it('Not a number.', function(){
        let result = numberToString('asdf');
        assert.strictEqual(result,'');
    });

    it('Passed.', function(){
        let result = numberToString(123);
        assert.strictEqual(result,'123');
    });
});