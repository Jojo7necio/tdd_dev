let booleanToString = require('../src/index');
let assert = require('assert');

describe("A function which convert the given boolean value into its string representation.", function(){
    it('String is given.', function() {
        let result = booleanToString('');
        assert.strictEqual(result, '');
    });
    
    it('true is given.', function() {
        let result = booleanToString(true);
        assert.strictEqual(result, "true");
    });

    it('false is given.', function() {
        let result = booleanToString(false);
        assert.strictEqual(result, "false");
    });
});
