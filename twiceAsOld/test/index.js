let twiceAsOld = require('../src/index');
let assert = require('assert');

describe('Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old)', 
    function(){
        it('Pass 1.', function(){
            let result = twiceAsOld(36,7);
            assert.strictEqual(result, 22);
        });

        it('Pass 2.', function(){
            let result = twiceAsOld(55,30);
            assert.strictEqual(result, 5);
        });

        it('Pass 3.', function(){
            let result = twiceAsOld(42,21);
            assert.strictEqual(result, 0);
        });
    });