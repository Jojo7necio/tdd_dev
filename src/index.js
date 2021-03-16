function booleanToString(b){
    //your code here
    if (typeof b === 'boolean') {
        if (b === true) {
            return 'true';
        } else {
            return 'false';
        }
    }
}

module.exports = booleanToString;