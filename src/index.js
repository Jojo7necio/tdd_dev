function booleanToString(b){
    //your code here
    if (typeof b === 'boolean') {
        if (b === true) {
            return 'true';
        } else {
            return 'false';
        }
    }else{
        return '';
    }
}

module.exports = booleanToString;