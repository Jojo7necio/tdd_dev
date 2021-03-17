let sumMix = require('../src/index');
let assert = require('assert');

describe('Given array integers as strings and numbers, return the sum of the array values as if all were numbers.', 
    function(){
        it('Not an array.', function(){
            let result = sumMix(123);
            assert.strictEqual(result, 0);
        });

        it('Not an array.', function(){
            let result = sumMix('asdf');
            assert.strictEqual(result, 0);
        });

        it('Passed.', function(){
            let result = sumMix([9, 3, '7', '3']);
            assert.strictEqual(result, 22);
        });
});