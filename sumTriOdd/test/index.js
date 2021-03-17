let solution = require('../src/index');
let assert = require('assert');

describe('Given the triangle of consecutive odd numbers. Calculate the row sums of this triangle from the row index (starting at index 1.)', 
    function(){
        it('Input must be greater than zero.', function(){
            let result = solution(0);
            assert.strictEqual(result, 0);
        });

        it('Passed.', function(){
            let result = solution(2);
            assert.strictEqual(result, 8);
        });

        it('Passed.', function(){
            let result = solution(3);
            assert.strictEqual(result, 27);
        });
});