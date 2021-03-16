function booleanToString(b){
    if (typeof b === 'boolean') {
        return b === true ? 'true' : 'false';
    }else{
        return '';
    }
}

module.exports = booleanToString;